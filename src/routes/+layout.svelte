<script>
  import "../styles/app.css";
  import "../styles/fonts.css";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <meta name="theme-color" content="#151516" />
</svelte:head>

<header>
  <nav>
    <ul>
      <li><a href={base}>About</a></li>
      <li class="second">
        <a href="{base}/projects">Projects</a>
      </li>
      <li class="text-right third">
        <a href="{base}/notes">Notes</a>
      </li>
    </ul>
  </nav>
</header>
<main>
  <slot />
</main>
<footer>
  <article class="grid-col-all">
    <Paragraph paragraphContent="Created by Otaniyoz in 2023" />
  </article>
  <article class="grid-col-all">
    <Paragraph paragraphContent="ここにいてもいいから" />
  </article>
</footer>

<style>
  main {
    min-height: calc(100vh - var(--footer-height));
  }

  footer {
    display: grid;
    margin-top: var(--gap-xxlarge);
    padding-top: var(--gap-xlarge);
    padding-bottom: var(--gap-xlarge);
    border-top: 1px solid var(--color-dark);
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 1fr);
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

  .vertical-text {
    writing-mode: vertical-lr;
  }

  .second {
    grid-column: 5 / 6;
  }

  .third {
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

    footer {
      grid-template-columns: repeat(6, 1fr);
    }

    .second {
      grid-column: 4 / 5;
    }

    .third {
      grid-column: 6 / 7;
    }
  }
</style>
