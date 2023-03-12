<script lang="ts">
	import type { PageData } from './$types';
	import ArticleCard from '$lib/components/ArticleCard.svelte';

	export let data: PageData;
	$: ({ articles } = data);
</script>

<svelte:head>
	<title>{data.user?.name ? data.user?.name : data.user?.username} on Feel Free</title>
</svelte:head>

<div class="grid grid-flow-row p-3">
	<div
		class="flex justify-between items-center gap-3 p-4 my-4 bg-black rounded-xl shadow-md shadow-black"
	>
		<div class="flex items-center gap-3">
			<h2 class="font-semibold text-3xl">{data.user?.name}</h2>
			<h3 class="font-mono text-xs bg-dark-900 p-1 rounded-md">{data.user?.username}</h3>
		</div>

		{#if data.session?.userId === data.user?.id}
			<a href={`/u/${data.user?.username}/edit`} class="btn-secondary-bg">Edit Profile</a>
		{/if}
	</div>

	<div>
		{#if articles}
			<p>Articles:</p>
			<div class="grid md:grid-cols-3 sm:grid-cols-2 py-2 gap-2">
				{#each articles as aritcle}
					<ArticleCard
						title={aritcle.title}
						id={aritcle.id}
						date={aritcle.date}
						description={aritcle.description}
					/>
				{/each}
			</div>
		{/if}
	</div>
</div>
