<ul>
    <li>
        <button disabled="{offset === 0}">Prev</button>
    </li>

    {#each pages as page}
        <li class:active={isCurrent(page)}>
            <button>{page}</button>
        </li>
    {/each}

    <li>
        <button disabled="{offset * limit >= total}">Next</button>
    </li>
</ul>

<script>
    let offset = 0;
    let limit = 10;
    let total = 63;
    let pages = [];

    $: {
      const length = Math.ceil(total / limit);
      pages = Array.apply(null, { length }).map((_, i) => ++i);
    }

    $: isCurrent = page => offset === ((page * limit) - limit);
    $: getOffset = page => (page - 1) * limit;
</script>

<style>
    .active button {
        background-color: grey;
    }
</style>
