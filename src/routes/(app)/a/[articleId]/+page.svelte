<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';
	import { formatRelative } from 'date-fns';

	export let data: PageData;
	$: ({ article } = data);
</script>

<svelte:head>
	<title>{article.title} &bull; Feel Free</title>
	<meta name="description" content={article.description} />
</svelte:head>

<div class="flex flex-col gap-3 p-3">
	<h1 class="font-semibold text-3xl text-center mt-3 py-3">{article.title}</h1>

	<div class="markdown-body bg-black p-7 rounded-lg shadow-lg shadow-black">
		<SvelteMarkdown source={article.content} />
	</div>

	<div class="flex justify-between items-center px-2">
		<h4 class="link font-semibold">
			<a href={`/u/${data.author?.username}`}>{data.author?.name}</a>
		</h4>
		<small
			>{formatRelative(article.date, new Date()).charAt(0).toUpperCase() +
				formatRelative(article.date, new Date()).slice(1)}</small
		>
	</div>
</div>
