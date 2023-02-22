<script lang="ts">
	export let id: string;
	export let title: string;
	export let date: Date;
	export let author: string;
	export let username: string;
</script>

<div class="bg-black flex flex-row items-center justify-between py-4 px-6 rounded-xl shadow-lg m-1">
	<a href={`/a/${id}`} class="font-semibold text-lg"> {title} </a>
	<a href={`/u/${username}`}>{author}</a>
	<p>{date.toLocaleString()}</p>
</div>
