<svelte:head>
    <title>{character.name} | Character</title>
</svelte:head>

<div>
    {character.name}
    <br>
    {character.birthday === 'Unknown' ?
        character.birthday :
        dayjs(character.birthday).format('DD.MM.YYYY')}
</div>

<script>
    import dayjs from 'dayjs';

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
