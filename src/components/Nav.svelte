<nav class="sidebar">
	<ul>
		<li><a href='.' class:active={$page.path === '/'}>Home</a></li>
	</ul>
</nav>

<script>
	import { stores } from '@sapper/app';
	const { page } = stores();
</script>

<style>
	.sidebar {
		background-color: var(--background-color);
		opacity: 0.8;
		height: 100%;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	ul li a {
		display: block;
		color: var(--text-color);
		padding: 10px 30px;
		text-decoration: none;
	}

	ul li a.active {
		background-color: var(--main-color);
	}

	ul li a:hover:not(.active) {
		background-color: #555;
		color: var(--text-color);
	}

	@media screen and (max-width: 767px) {
		.sidebar {
			height: fit-content;
		}
	}
</style>
