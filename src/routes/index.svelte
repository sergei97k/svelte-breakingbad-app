<svelte:head>
	<title>Svelte Breaking Bad App</title>
</svelte:head>

<CharactersList {characters} />

<script>
	import CharactersList from "../components/CharactersList.svelte";

	export let characters;
</script>

<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`characters.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { characters: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>
