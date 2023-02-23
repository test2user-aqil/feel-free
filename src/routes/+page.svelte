<script lang="ts">
	import type { PageData } from './$types';
	import ArticleCard from '$lib/components/ArticleCard.svelte';

	export let data: PageData;
	let articles = data.articles;

	$: articles = data.articles;
</script>

<div>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>

<div class="px-2">
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
