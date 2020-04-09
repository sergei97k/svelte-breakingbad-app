<svelte:head>
    <title>{character.name} | Character</title>
</svelte:head>

<section class="character-page">
    <div class="image">
        <img src={character.img} alt="Avatar">
    </div>

    <div class="info">
        <h2>{character.name}</h2>

        <table>
            <tr>
                <td>Nickname</td>
                <td>{character.nickname}</td>
            </tr>

            <tr>
                <td>Birthday</td>
                <td>{birthday}</td>
            </tr>

            <tr>
                <td>Occupation</td>
                <td>
                    {#each character.occupation as occupation, i}
                        {occupation}{i !== character.occupation.length - 1 ? ', ' : ''}
                    {/each}
                </td>
            </tr>

            <tr>
                <td>Breaking Bad Seasons</td>
                <td>
                    {#each character.appearance as appearance, i}
                        {appearance}{i !== character.appearance.length - 1 ? ', ' : ''}
                    {/each}
                </td>
            </tr>

            <tr>
                <td>Status</td>
                <td>{character.status}</td>
            </tr>
        </table>
    </div>
</section>

<script>
    import dayjs from 'dayjs';

    export let character;

    const birthday = character.birthday === 'Unknown' ? character.birthday : dayjs(character.birthday).format('DD.MM.YYYY');
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

<style>
    .character-page {
        display: grid;
        grid-gap: 0 20px;
        grid-template-columns: 300px 1fr;
        grid-template-areas: 'image info';
    }

    .image {
        grid-area: image;
    }

    .image img {
        width: 100%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .info {
        grid-area: info;
    }

    .info h2 {
        text-align: center;
        color: grey;
        margin-bottom: 30px;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    th, td {
        text-align: left;
        padding: 16px;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
</style>
