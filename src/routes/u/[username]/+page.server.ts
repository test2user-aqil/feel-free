import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async ({ params }) => {
	const user = await prisma.user.findUnique({
		where: {
			username: params.username
		}
	});
	const articles = await prisma.article.findMany({
		where: {
			userId: user?.id
		}
	});

	return {
		user,
		articles: articles
	};
};
