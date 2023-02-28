import type { Actions } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	createArticle: async ({ request, locals }) => {
		const { user, session } = await locals.validateUser();
		if (!(user && session)) {
			throw redirect(302, '/');
		}

		const { id, title, content, description } = Object.fromEntries(
			await request.formData()
		) as Record<string, string>;

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

			throw redirect(303, `/a/${id}`);
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the article.' });
		}
	}
};
