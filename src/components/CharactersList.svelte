<div>
    {#if $preloading}
        <Spinner
            size="50"
            speed="750"
            color="#A82124"
            thickness="2"
            gap="40"
        />
    {:else}
        <div class="container">
            {#each characters as character}
                <Card {character} />
            {:else}
                <p>No results</p>
            {/each}
        </div>

        <Pagination {offset} />
    {/if}
</div>

<script>
    import { stores } from '@sapper/app';
    import Spinner from 'svelte-spinner';

    import Pagination from './Pagination.svelte';
    import Card from './Card.svelte';

    const { preloading } = stores();

    export let characters;
    export let offset;
</script>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        margin: 30px 0;
        height: 100%;
    }
</style>
