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
	:global(:root) {
		--main-color: rgb(72, 127, 90);
		--text-color: white;
		--background-color: rgb(59, 59, 59);
	}

	.grid-container {
		display: grid;
		grid-template-columns: 300px 1fr;
		grid-template-rows: 77px 1fr;
		grid-template-areas:
				'header header header'
				'sidebar main main';
		height: 100%;
	}

	:global(.header) {
		grid-area: header;
	}
	:global(.main) {
		grid-area: main;
		margin: 30px;
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
			grid-template-columns: 1fr;
			grid-template-areas:
					'header header'
					'sidebar sidebar'
					'main main';
		}
	}
</style>
