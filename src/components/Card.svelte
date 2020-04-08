<a rel="prefetch" href="characters/{character.char_id}" class="card">
    <img src={character.img} alt="Avatar" style="width:100%">
    <div class="container">
        <h4><b>{character.name}</b></h4>
        <p>{character.nickname}</p>
    </div>
</a>

<script>
    export let character;
</script>

<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
        max-width: 375px;

        text-decoration: none;
    }

    .card:hover {
        box-shadow: 0 16px 24px 0 rgba(0,0,0,0.4);
    }

    .container {
        padding: 2px 16px;
    }

    h4 {
        font-size: 18px;
    }

    img {
        border-radius: 5px 5px 0 0;
        max-height: 330px;
        object-fit: cover;
        object-position: top;
    }
</style>
