import type { PageServerLoad, Actions } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';

const articleSchema = z.object({
	title: z
		.string({ required_error: 'Title is required' })
		.min(6, { message: 'Title must be 6 or more characters long' })
		.max(64, { message: 'Title must be 64 or fewer characters long' })
		.trim(),
	content: z
		.string({ required_error: 'Content is required' })
		.min(12, { message: 'Content must be 12 or more characters long' })
		.max(4047, { message: 'Content must be 4047 or fewer characters long' }),
	description: z
		.string()
		.max(127, { message: 'Description must be 127 or fewer characters long' })
		.trim()
});

export const load: PageServerLoad = async ({ params, locals }) => {
	const session = await locals.validate();
	if (!session) {
		throw redirect(302, '/login');
	}

	const article = await prisma.article.findUnique({
		where: {
			id: params.articleId
		}
	});

	if (session?.userId !== article?.userId) {
		throw redirect(303, '/');
	}

	return {
		article
	};
};

export const actions: Actions = {
	updateArticle: async ({ request, locals, params }) => {
		const { user, session } = await locals.validateUser();
		if (!(user && session)) {
			throw redirect(302, '/');
		}

		const formData = Object.fromEntries(await request.formData()) as Record<string, string>;
		const { title, content, description } = formData;

		try {
			articleSchema.parse(formData);
		} catch (err: any) {
			const { fieldErrors: errors } = err.flatten();
			return {
				data: formData,
				errors
			};
		}

		const article = await prisma.article.findUnique({
			where: {
				id: params.articleId
			}
		});

		try {
			await prisma.article.update({
				where: {
					id: params.articleId
				},
				data: {
					title: title,
					content: content,
					description: description
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not update the article.' });
		}

		throw redirect(303, `/a/${article?.id}`);
	},
	deleteArticle: async ({ locals, params }) => {
		const { user, session } = await locals.validateUser();
		if (!(user && session)) {
			throw redirect(302, '/');
		}

		const article = await prisma.article.findUnique({
			where: {
				id: params.articleId
			}
		});

		if (article?.userId !== user.userId) {
			throw redirect(302, '/');
		}

		try {
			await prisma.article.delete({
				where: {
					id: params.articleId
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not update the article.' });
		}

		throw redirect(303, '/');
	}
};
