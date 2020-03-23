<svelte:head>
    <title>{character.name} | Character</title>
</svelte:head>

<div>
    {character.name}
</div>

<script>
    export let character;
</script>

<script context="module">
    export async function preload({ params }) {
        const res = await this.fetch(`characters/${params.id}.json`);
        const data = await res.json();

        if (res.status === 200 && data.length) {
            return { character: data[0] };
        } else {
            this.error(res.status, data.message);
        }
    }
</script>
