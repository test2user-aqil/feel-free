import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { z } from 'zod';

const registerSchema = z
	.object({
		name: z
			.string({ required_error: 'Name is required' })
			.min(2, { message: 'Name must be 2 or more characters long' })
			.max(64, { message: 'Name must be 64 or fewer characters long' }),
		username: z
			.string({ required_error: 'Username is required' })
			.min(4, { message: 'Username must be 4 or more characters long' })
			.max(64, { message: 'Username must be 64 or fewer characters long' })
			.trim(),
		email: z
			.string({ required_error: 'Email is required' })
			.min(6, { message: 'Email must be 6 or more characters long' })
			.max(64, { message: 'Email must be 64 or fewer characters long' })
			.email({ message: 'Invalid email address' }),
		password: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be 6 or more characters long' })
			.max(64, { message: 'Password must be 64 or fewer characters long' }),
		passwordConfirm: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be 6 or more characters long' })
			.max(64, { message: 'Password must be 64 or fewer characters long' })
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'Password and Confirm Password must match',
				path: ['password']
			});
			ctx.addIssue({
				code: 'custom',
				message: 'Password and Confirm Password must match',
				path: ['passwordConfirm']
			});
		}
	});

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.validate();
	if (session) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData()) as Record<string, string>;
		const { name, username, email, password } = formData;

		try {
			const result = registerSchema.parse(formData);
			console.log(result);

			await auth.createUser({
				key: {
					providerId: 'username',
					providerUserId: username,
					password
				},
				attributes: {
					name,
					username,
					email
				}
			});
		} catch (err) {
			const { fieldErrors: errors } = err.flatten();
			const { password, passwordConfirm, ...rest } = formData;
			return {
				data: rest,
				errors
			};
		}
		throw redirect(302, '/login');
	}
};
