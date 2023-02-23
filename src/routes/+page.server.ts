import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async () => {
	const articles = await prisma.article.findMany({
		orderBy: {
			date: 'desc'
		},
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
		},
		take: 12
	});

	return {
		articles: articles
	};
};
