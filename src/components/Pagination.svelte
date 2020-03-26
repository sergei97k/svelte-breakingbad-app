<ul>
    <li>
        <a href="?offset={offset - limit}" disabled="{isFirstPage()}">
            Prev
        </a>
    </li>

    {#each pages as page}
        <li class:active={isCurrent(page)}>
            <a href="?offset={getOffset(page)}">{page}</a>
        </li>
    {/each}

    <li>
        <a href="?offset={offset + limit}" disabled="{isLastPage()}">
            Next
        </a>
    </li>
</ul>

<script>
    import { TOTAL_AMOUNT, limit } from '../helpers/api';

    let pages = [];
    let offset = 0;

    $: {
      const length = Math.ceil(TOTAL_AMOUNT / limit);
      pages = Array.apply(null, { length }).map((_, i) => ++i);
    }

    $: isCurrent = page => offset === ((page * limit) - limit);
    $: isFirstPage = () => offset === 0;
    $: isLastPage = () => offset + limit >= TOTAL_AMOUNT;
    $: getOffset = page => (page - 1) * limit;
</script>

<style>
    .active button {
        background-color: grey;
    }
</style>
