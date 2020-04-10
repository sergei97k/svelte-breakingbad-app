<div class="container">
    {#if $preloading}
        <div class="spinner">
            <Spinner
                    size="75"
                    speed="750"
                    color="#487f5a"
                    thickness="3"
                    gap="40"
            />
        </div>
    {:else}
        <div class="list">
            {#each characters as character}
                <Card {character} />
            {:else}
                <p class="no-results">No results</p>
            {/each}
        </div>


        {#if characters.length}
            <div class="pagination">
                <Pagination {offset} />
            </div>
        {/if}
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
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
    }

    .spinner {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .pagination {
        margin-top: 30px;
    }

    .no-results {
        position: absolute;
        top: 50%;

        font-size: 18px;
        color: grey;
    }
</style>
