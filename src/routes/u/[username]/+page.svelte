<script lang="ts">
	import type { PageData } from './$types';
	import ArticleCard from '$lib/components/ArticleCard.svelte';

	export let data: PageData;
	$: ({ articles } = data);
</script>

<div class="flex items-center gap-3 px-2 py-4">
	<h2 class="font-semibold text-3xl">{data.user?.name}</h2>
	<h3 class="font-mono text-xs bg-dark-900 p-1 rounded-md">{data.user?.username}</h3>
</div>

<div class="px-2">
	<p>Articles:</p>
	<div class="grid md:grid-cols-3 sm:grid-cols-2 py-2 gap-2">
		{#each articles as aritcle}
			<ArticleCard title={aritcle.title} id={aritcle.id} date={aritcle.date} />
		{/each}
	</div>
</div>
