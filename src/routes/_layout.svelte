<div class="grid-container">
	<Header />

	<Nav />

	<main class="main">
		<slot></slot>
	</main>
</div>

<script>
	import Header from '../components/Header.svelte';
	import Nav from '../components/Nav.svelte';
</script>

<style>
	.grid-container {
		display: grid;
		grid-gap: 0 20px;
		grid-template-columns: 300px 1fr;
		grid-template-areas:
				'header header header'
				'sidebar main main'
	}

	:global(.header) {
		grid-area: header;
	}
	:global(.main) {
		grid-area: main;
	}
	:global(.sidebar) {
		grid-area: sidebar;
	}

	@media screen and (max-width: 1023px) {
		.grid-container  {
			grid-template-columns: 150px 1fr;
		}
	}

	@media screen and (max-width: 767px) {
		.grid-container  {
			grid-template-areas:
					'header header'
					'sidebar sidebar'
					'main main';
		}
	}
</style>
