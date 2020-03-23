<svelte:head>
	<title>Svelte Breaking Bad App</title>
</svelte:head>

<CharactersList {characters} />

<script>
	import CharactersList from "../components/CharactersList.svelte";

	export let characters;
</script>

<script context="module">
	import { stringify } from 'query-string';

	export async function preload({ params, query }) {
		const res = await this.fetch(`characters.json?${stringify(query)}`);
		const data = await res.json();

		if (res.status === 200) {
			return { characters: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>
