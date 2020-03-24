<div>
    <Filter />

    {#each characters as character}
        <div class="card">
            <a rel="prefetch" href="characters/{character.char_id}">{character.name}</a>
        </div>
        {:else}
        <p>No results</p>
    {/each}

    <Pagination />
</div>

<script>
    import Pagination from './Pagination.svelte';
    import Filter from './Filter.svelte';

    export let characters;
</script>
