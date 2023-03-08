import type { PageServerLoad, Actions } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, locals }) => {
	const session = await locals.validate();
	const user = await prisma.user.findUnique({
		where: {
			username: params.username
		}
	});

	if (!session) {
		throw redirect(302, '/login');
	}

	if (session?.userId !== user?.id) {
		throw redirect(303, '/');
	}

	return {
		user
	};
};

export const actions: Actions = {
	updateProfile: async ({ request, locals }) => {
		const { user, session } = await locals.validateUser();
		if (!(user && session)) {
			throw redirect(302, '/');
		}

		const { username, name } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>;

		try {
			await prisma.user.update({
				where: {
					id: user.userId
				},
				data: {
					username: username,
					name: name
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not update the profile.' });
		}

		throw redirect(303, `/u/${username}`);
	}
};
