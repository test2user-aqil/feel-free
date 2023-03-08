import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, locals }) => {
	const session = await locals.validate();
	const user = await prisma.user.findUnique({
		where: {
			username: params.username
		}
	});
	const articles = await prisma.article.findMany({
		orderBy: {
			date: 'desc'
		},
		where: {
			userId: user?.id
		},
		select: {
			id: true,
			title: true,
			description: true,
			date: true
		}
	});

	if (user && articles) {
		return {
			user,
			articles: articles,
			session: session
		};
	} else {
		throw error(404, {
			message: 'No such user found'
		});
	}
};
