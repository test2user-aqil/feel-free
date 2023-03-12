import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';

const articleSchema = z.object({
	id: z
		.string({ required_error: 'Id is required' })
		.min(6, { message: 'Id must be 6 or more characters long' })
		.max(64, { message: 'Id must be 64 or fewer characters long' })
		.toLowerCase()
		.trim(),
	title: z
		.string({ required_error: 'Title is required' })
		.min(6, { message: 'Title must be 6 or more characters long' })
		.max(64, { message: 'Title must be 64 or fewer characters long' })
		.trim(),
	content: z
		.string({ required_error: 'Content is required' })
		.min(12, { message: 'Content must be 12 or more characters long' })
		.max(4047, { message: 'Content must be 4047 or fewer characters long' }),
	description: z
		.string()
		.max(127, { message: 'Description must be 127 or fewer characters long' })
		.trim()
});

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.validate();
	if (!session) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	createArticle: async ({ request, locals }) => {
		const { user, session } = await locals.validateUser();
		if (!(user && session)) {
			throw redirect(302, '/');
		}

		const formData = Object.fromEntries(await request.formData()) as Record<string, string>;
		const { id, title, content, description } = formData;

		try {
			articleSchema.parse(formData);
		} catch (err: any) {
			const { fieldErrors: errors } = err.flatten();
			return {
				data: formData,
				errors
			};
		}

		try {
			await prisma.article.create({
				data: {
					id,
					title,
					content,
					description,
					userId: user.userId
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the article.' });
		}

		throw redirect(303, `/a/${id}`);
	}
};
