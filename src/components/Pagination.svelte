<ul>
    <li>
        <button on:click={setPage} value={$offset - $limit} disabled="{isFirstPage()}">
            Prev
        </button>
    </li>

    {#each pages as page}
        <li class:active={isCurrent(page)}>
            <button on:click={setPage} value={getOffset(page)}>{page}</button>
        </li>
    {/each}

    <li>
        <button on:click={setPage} value={$offset + $limit} disabled="{isLastPage()}">
            Next
        </button>
    </li>
</ul>

<script>
    import { offset, limit } from '../stores/filters';
    import { TOTAL_AMOUNT } from '../helpers/api';

    let pages = [];

    function setPage({ target: { value }}) {
      $offset = Number(value);
    }

    $: {
      const length = Math.ceil(TOTAL_AMOUNT / $limit);
      pages = Array.apply(null, { length }).map((_, i) => ++i);
    }

    $: isCurrent = page => $offset === ((page * $limit) - $limit);
    $: isFirstPage = () => $offset === 0;
    $: isLastPage = () => $offset + $limit >= TOTAL_AMOUNT;
    $: getOffset = page => (page - 1) * $limit;
</script>

<style>
    .active button {
        background-color: grey;
    }
</style>
