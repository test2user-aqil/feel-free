<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ article } = data);
</script>

<h3>{article?.title}</h3>
<h4>{data.user?.name}</h4>
<p>{article?.content}</p>
<small>{article?.date}</small>
