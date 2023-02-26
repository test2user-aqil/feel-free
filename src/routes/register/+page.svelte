<form method="POST" class="max-w-md mx-auto grid gap-4 py-10">
	<hgroup>
		<h2 class="font-medium text-xl text-center">Register</h2>
		<h3 class="text-sm text-center font-bold">To post articles, you'll need an account.</h3>
	</hgroup>

	<div class="grid">
		<label for="name">Name</label>
		<input type="text" id="name" name="name" class="input" required />
	</div>

	<div class="grid">
		<label for="username">Username</label>
		<input type="text" id="username" name="username" class="input" required />
	</div>

	<div class="grid">
		<label for="password">Password</label>
		<input type="password" id="password" name="password" class="input" required />
	</div>

	<button type="submit" class="btn-primary">Register</button>

	<p class="text-xs text-center">
		Already have an account? <a href="/login" class="link">Login</a>
	</p>
</form>

<style>
	label {
		@apply text-xs pl-1;
	}
</style>
