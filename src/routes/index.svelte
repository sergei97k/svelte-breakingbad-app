<svelte:head>
	<title>Svelte Breaking Bad App</title>
</svelte:head>


<script>
	export let characters;
	console.log('characters', characters);
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
