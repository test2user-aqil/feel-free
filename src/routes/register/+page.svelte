<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<form method="POST" class="registration-form">
	<hgroup class="text-center">
		<h2 class="font-medium text-xl">Register</h2>
		<h3 class="font-bold text-sm">To post articles, you'll need an account.</h3>
	</hgroup>

	<div>
		<label for="name">Name</label>
		<input type="text" id="name" name="name" value={form?.data?.name ?? ''} />
		{#if form?.errors?.name}
			<span>{form?.errors?.name[0]}</span>
		{/if}
	</div>

	<div>
		<label for="username">Username</label>
		<input type="text" id="username" name="username" value={form?.data?.username ?? ''} />
		{#if form?.errors?.username}
			<span>{form?.errors?.username[0]}</span>
		{/if}
	</div>

	<div>
		<label for="email">Email</label>
		<input type="text" name="email" id="email" value={form?.data?.email ?? ''} />
		{#if form?.errors?.email}
			<span>{form?.errors?.email[0]}</span>
		{/if}
	</div>

	<div>
		<label for="password">Password</label>
		<input type="password" id="password" name="password" value={form?.data?.password ?? ''} />
		{#if form?.errors?.password}
			<span>{form?.errors?.password[0]}</span>
		{/if}
	</div>

	<div>
		<label for="passwordConfirm">Confirm Password</label>
		<input
			type="password"
			id="passwordConfirm"
			name="passwordConfirm"
			value={form?.data?.passwordConfirm ?? ''}
		/>
		{#if form?.errors?.passwordConfirm}
			<span>{form?.errors?.passwordConfirm[0]}</span>
		{/if}
	</div>

	<button type="submit" class="btn-primary">Register</button>

	<p class="text-xs text-center">
		Already have an account? <a href="/login" class="link">Login</a>
	</p>
</form>
