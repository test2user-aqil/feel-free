import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, params }) => {
	const session = await locals.validate();
	const article = await prisma.article.findUnique({
		where: {
			id: params.articleId
		}
	});

	const author = await prisma.user.findUnique({
		where: {
			id: article?.userId
		}
	});

	if (article) {
		return {
			article,
			author,
			session
		};
	} else {
		throw error(404, {
			message: 'No such article found'
		});
	}
};
