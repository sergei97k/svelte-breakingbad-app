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
        {#each characters as character}
            <div class="card">
                <a rel="prefetch" href="characters/{character.char_id}">{character.name}</a>
            </div>
            {:else}
            <p>No results</p>
        {/each}

        <Pagination {offset} />
    {/if}
</div>

<script>
    import { stores } from '@sapper/app';
    import Spinner from 'svelte-spinner';

    import Pagination from './Pagination.svelte';

    const { preloading } = stores();

    export let characters;
    export let offset;
</script>
