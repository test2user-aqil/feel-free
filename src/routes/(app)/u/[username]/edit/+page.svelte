<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let username = data.user?.username;
	let name = data.user?.name;
</script>

<form
	action="?/updateProfile"
	method="POST"
	autocomplete="off"
	class="max-w-md mx-auto flex flex-col md:px-5 px-3 gap-5"
>
	<h3 class="font-semibold text-2xl text-center mt-4">Update Profile</h3>

	<div class="flex flex-col gap-3">
		<div class="flex md:items-center justify-between flex-col md:flex-row md:gap-3 gap-1">
			<label for="username" class="text-sm">Username</label>
			<input type="text" id="username" name="username" class="input" bind:value={username} />
		</div>

		<div class="flex md:items-center justify-between flex-col md:flex-row md:gap-3 gap-1">
			<label for="name" class="text-sm">Name</label>
			<input type="text" id="name" name="name" class="input" bind:value={name} />
		</div>
	</div>

	<div class="flex justify-between items-center gap-2">
		<a href={`/u/${data.user?.username}`} class="btn-danger-bordered sm:flex-1 text-center"
			>Cancel</a
		>
		<button type="submit" class="btn-primary sm:flex-1">Update</button>
	</div>
</form>
