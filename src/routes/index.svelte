<svelte:head>
	<title>Svelte Breaking Bad App</title>
</svelte:head>

<CharactersList {characters} {offset} />

<script>
	import CharactersList from "../components/CharactersList.svelte";

	export let characters;
	export let offset;
</script>

<script context="module">
	import { stringify } from 'query-string';

	export async function preload({ params, query }) {
		const res = await this.fetch(`characters.json?${stringify(query)}`);
		const { characters, offset } = await res.json();

		if (res.status === 200) {
			return { characters, offset };
		} else {
			this.error(res.status);
		}
	}
</script>

<style>
	:global(:root) {
		--main-color: rgb(72, 127, 90);
		--text-color: white;
		--background-color: rgb(59, 59, 59);
	}
</style>
