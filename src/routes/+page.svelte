<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let articles = data.articles;

	$: articles = data.articles;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>Latest articles:</h2>
{#each articles as article}
	<p>
		<a href={`/a/${article.id}`}>{article.title}</a> by
		<a href={`/u/${article.User.username}`}>{article.User.name}</a>
	</p>
{/each}
