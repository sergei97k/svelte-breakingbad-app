<div class="pagination">
    <a href="?offset={offset - limit}" class:disabled="{isFirstPage()}">
        &laquo;
    </a>

    {#each pages as page}
        <a href="?offset={getOffset(page)}" class:active={isCurrent(page)}>
            {page}
        </a>
    {/each}

    <a href="?offset={offset + limit}" class:disabled="{isLastPage()}">
        &raquo;
    </a>
</div>

<script>
    import { TOTAL_AMOUNT, limit } from '../helpers/api';

    export let offset;
    let pages = [];

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
    .pagination {
        display: inline-block;
    }

    .pagination a {
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        transition: background-color .3s;
    }

    .pagination a.active {
        background-color: var(--main-color);
        color: var(--text-color);
        border-radius: 5px;
    }

    .pagination a.disabled {
        color: grey;
        opacity: 0.5;

        cursor: not-allowed;
        text-decoration: none;
        pointer-events: none;
    }

    .pagination a:hover:not(.active) {
        background-color: #ddd;
        border-radius: 5px;
    }

    .pagination a:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .pagination a:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
</style>
