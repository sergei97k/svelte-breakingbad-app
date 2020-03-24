<label for="category">Group by TV series: </label>
<select name="category" id="category" bind:value={sort}>
    <option value=""></option>
    {#each categories as value}
        <option {value}>{value.toUpperCase()}</option>
    {/each}
</select>

<script>
    let categories = ['Breaking Bad', 'Better Call Saul'];
    let sort = '';
</script>
