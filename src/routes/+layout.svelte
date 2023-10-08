<script>
  import "../styles/app.css";
  import "../styles/fonts.css";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <meta name="theme-color" content="#151516" />
</svelte:head>

<header>
  <nav>
    <ul>
      <li><a href={base}>About</a></li>
      <li id="second-nav-item">
        <a href="{base}/projects">Projects</a>
      </li>
      <li id="third-nav-item" class="text-right">
        <a href="{base}/notes">Notes</a>
      </li>
    </ul>
  </nav>
</header>
<main>
  <slot />
</main>

<style>
  main {
    min-height: calc(100vh - var(--footer-height));
  }

  header {
    position: sticky;
    top: var(--gap-small);
    padding-bottom: var(--gap-xxlarge);
  }

  li {
    padding: 0;
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-small);
  }

  #second-nav-item {
    grid-column: 5 / 6;
  }

  #third-nav-item {
    grid-column: 8 / 9;
  }

  ul {
    padding: 0;
    display: grid;
    margin-block: 0;
    list-style: none;
    padding-inline: 0;
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (max-width: 1200px) {
    ul {
      grid-template-columns: repeat(6, 1fr);
    }

    #second-nav-item {
      grid-column: 4 / 5;
    }

    #third-nav-item {
      grid-column: 6 / 7;
    }
  }
</style>
