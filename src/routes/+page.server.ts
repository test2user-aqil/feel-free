import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
	const articles = await prisma.article.findMany({
		select: {
			id: true,
			title: true,
			date: true,
			description: true,
			User: {
				select: {
					name: true,
					username: true
				}
			}
		}
	});

	return {
		articles: articles
	};
};
