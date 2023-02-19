import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
	const { user, session } = await locals.validateUser();
	return {
		articles: await prisma.article.findMany()
	};
};
