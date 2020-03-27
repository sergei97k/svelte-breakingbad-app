<div class="grid-container">
	<header class="header">
		BreakingBad
	</header>

	<Nav {segment} class="sidebar" />

	<main class="main">
		<slot></slot>
	</main>
</div>

<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	.grid-container {
		display: grid;
		grid-gap: 20px;
		grid-template-columns: 300px 1fr;
		grid-template-areas:
				'header header header'
				'sidebar main main'
	}

	.header {
		grid-area: header;
	}
	.main {
		grid-area: main;
	}
	.sidebar {
		grid-area: sidebar;
	}

	@media (max-width: 1023px) {
		.grid-container  {
			grid-template-columns: 150px 1fr;
		}
	}

	@media (max-width: 767px) {
		.grid-container  {
			grid-template-areas:
					'header header'
					'sidebar sidebar'
					'main main';
		}
	}
</style>
