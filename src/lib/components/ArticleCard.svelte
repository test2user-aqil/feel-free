<script lang="ts">
	export let id: string;
	export let title: string;
	export let description: string;
	export let date: Date;
	export let author: string;
	export let username: string;
</script>

<div class="bg-black flex flex-col justify-between rounded-xl shadow-lg border border-white/5">
	<div class="px-4 py-3">
		<a href={`/a/${id}`} class="font-semibold text-lg"> {title} </a>
	</div>

	<p class="py-2 px-4 text-sm">
		{description ? description : ''}
	</p>

	<div class="border-t border-white/20 py-2 px-4 flex justify-between">
		<p>{date.toLocaleString()}</p>
		<a href={`/u/${username}`}>{author}</a>
	</div>
</div>
