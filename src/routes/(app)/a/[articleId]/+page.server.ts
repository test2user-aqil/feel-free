import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const article = await prisma.article.findUnique({
		where: {
			id: params.articleId
		}
	});

	if (article) {
		return {
			article
		};
	} else {
		throw error(404, {
			message: 'No such article found'
		});
	}
};
