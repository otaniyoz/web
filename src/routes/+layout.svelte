<script>
  import "../styles/app.css";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <meta name="theme-color" content="#f5f5f2">
</svelte:head>

<header>
  <nav>
    <ul>
      <li class="about"><a href="{base}">About</a></li>
      <li class="text-right"><a href="{base}/projects">Projects</a></li>
      <li class="text-right"><a href="{base}/notes">Notes</a></li>
    </ul>
  </nav>
</header>
<main class="short-page-wrapper">
  <slot />
</main>
<footer>
  <p>Beannacht libh</p>
</footer>

<style>
  .short-page-wrapper {
    display: flex;
    min-height: calc(100vh - var(--footer-height));
    flex-flow: column nowrap;
    row-gap: var(--gap-large);
    justify-content: space-between;
  }

  .about {
    grid-column: 1 / span 2;
  }

  footer {
    display: grid;
    align-items: end;
    height: var(--footer-height);
    justify-items: start;
  }

  header {
    top: 8px;
    position: sticky;
    padding-bottom: var(--gap-large);
  }

  li {
    padding: 0;
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-small);
  }

  ul {
    padding: 0;
    display: grid;
    margin-block: 0;
    list-style: none;
    padding-inline: 0;
    gap: var(--gap-small);
    grid-template-columns: repeat(4, 1fr);
  }
</style>
