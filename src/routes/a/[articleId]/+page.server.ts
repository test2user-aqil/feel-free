import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async ({ params }) => {
	const article = await prisma.article.findUnique({
		where: {
			id: params.articleId
		}
	});
	return {
		article
	};
};
