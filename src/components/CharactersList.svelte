<div>
    {#each characters as character}
        <div class="card">
            <a rel="prefetch" href="characters/{character.char_id}">{character.name}</a>
        </div>
        {:else}
        <p>No results</p>
    {/each}
</div>

<script>
    export let characters;
</script>
