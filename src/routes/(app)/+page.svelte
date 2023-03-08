<script lang="ts">
	import type { PageData } from './$types';
	import ArticleCard from '$lib/components/ArticleCard.svelte';

	export let data: PageData;
	let articles = data.articles;

	$: articles = data.articles;
</script>

<svelte:head>
	{#if !data.user}
		<title>A gateway to express something &bull; Feel Free</title>
	{:else}
		<title>Home &bull; Feel Free</title>
	{/if}
</svelte:head>

{#if !data.user}
	<div class="flex flex-col items-center gap-4 py-20">
		<img src="/logo.svg" alt="Logo" class="h-20" />
		<p class="font-display text-2xl">to express</p>
	</div>
{/if}

<div class="px-2 py-4">
	<h2>Latest articles:</h2>
	<div class="grid md:grid-cols-3 sm:grid-cols-2 py-2 gap-2">
		{#each articles as article}
			<ArticleCard
				author={article.User.name}
				username={article.User.username}
				id={article.id}
				title={article.title}
				description={article.description}
				date={article.date}
			/>
		{/each}
	</div>
</div>
