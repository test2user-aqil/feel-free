import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';

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
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the article.' });
		}

		throw redirect(303, `/a/${id}`);
	}
};