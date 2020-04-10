<header class="header">
    <a href='.' class="logo"><span>Br</span>eaking <span>Ba</span>d</a>
    <a href='https://github.com/sergei97k/svelte-breakingbad-app' target="_blank" class="link">GitHub</a>
</header>

<style>
    header {
        background-color: var(--background-color);
        padding: 20px 30px;
        position: fixed;
        width: calc(100% - 60px);
        top: 0;
        z-index: 999;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        color: var(--text-color);
        text-decoration: none;
        font-size: 25px;
        font-weight: bold;
    }
    .logo span {
        color: var(--main-color);
    }

    .link {
        color: lightgrey;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
    }
</style>
