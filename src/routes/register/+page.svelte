<form method="POST" class="registration-form">
	<hgroup class="text-center">
		<h2 class="font-medium text-xl">Register</h2>
		<h3 class="font-bold text-sm">To post articles, you'll need an account.</h3>
	</hgroup>

	<div>
		<label for="name">Name</label>
		<input type="text" id="name" name="name" required />
	</div>

	<div>
		<label for="username">Username</label>
		<input type="text" id="username" name="username" required />
	</div>

	<div>
		<label for="password">Password</label>
		<input type="password" id="password" name="password" required />
	</div>

	<button type="submit" class="btn-primary">Register</button>

	<p class="text-xs text-center">
		Already have an account? <a href="/login" class="link">Login</a>
	</p>
</form>
