<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ articles } = data);
</script>

<h2>{data.user?.name}</h2>
<h3>{data.user?.username}</h3>

Articles:
{#each articles as aritcle}
	<p><a href={`/a/${aritcle.id}`}>{aritcle.title}</a></p>
{/each}
