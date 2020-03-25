<svelte:head>
	<title>Svelte Breaking Bad App</title>
</svelte:head>

<CharactersList {characters} />

<script>
	import { goto } from '@sapper/app';
	import filters from '../stores/filters';
	import CharactersList from "../components/CharactersList.svelte";

	export let characters;

	// Router method to update the router params
	$: $filters && goto(`?${$filters}`);
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
