import type { Actions } from './$types';
import { prisma } from '$lib/server/prisma';
import { error, fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	createArticle: async ({ request, locals }) => {
		const { user, session } = await locals.validateUser();
		if (!(user && session)) {
			throw redirect(302, '/');
		}

		const { id, title, content } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>;

		try {
			await prisma.article.create({
				data: {
					id,
					title,
					content,
					userId: user.userId
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the article.' });
		}

		return {
			status: 201
		};
	}
};