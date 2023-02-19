import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

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

	if (user && articles) {
		return {
			user,
			articles: articles
		};
	} else {
		throw error(404, {
			message: 'No such user found'
		});
	}
};
