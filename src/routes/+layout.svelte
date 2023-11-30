<script>
  import "../styles/app.css";
  import "../styles/fonts.css";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import Link from "$lib/components/Link.svelte";
</script>

<header>
  <nav>
    <ul>
      <li>
        <Link href={base} target='_self' classes={($page.url.pathname.endsWith(base + "/"))?'grey-color':''}>About</Link>
      </li>
      <li>
        <Link href="{base}/pomes/all" target='_self' classes={($page.url.pathname.includes("pomes"))?'grey-color':''}>Pomes</Link>
      </li>
      <li class="second">
        <Link href="{base}/projects/all" target='_self' classes={($page.url.pathname.includes("projects"))?'grey-color':''}>Projects</Link>
      </li>
      <li class="third text-right">
        <Link href="{base}/notes/all" target='_self' classes={($page.url.pathname.includes("notes"))?'grey-color':''}>Notes</Link>
      </li>
    </ul>
  </nav>
</header>
<main>
  <slot />
</main>
<footer>
  <p class="grid-col13 grid-row34 sans-serif">Created by</p>
  <p class="second grid-row34 sans-serif">Otaniyoz</p>
  <p class="third grid-row34 text-right sans-serif">in 2023</p>
</footer>

<style>
  nav {
    padding: var(--gap-small) var(--gap-regular);
  }
  main {
    padding: var(--gap-small) var(--gap-regular);
    min-height: calc(100vh - var(--footer-height));
  }
  footer {
    display: grid;
    margin-top: var(--gap-xxlarge);
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: var(--gap-xlarge) var(--gap-regular);
  }
  header {
    padding-bottom: var(--gap-xxlarge);
  }
  li {
    padding: 0;
    color: inherit;
    min-height: var(--line-height-small);
    font-size: var(--font-size-regular);
    line-height: var(--line-height-large);
    padding-bottom: var(--gap-regular);
  }
  ul {
    padding: 0;
    display: grid;
    margin-block: 0;
    list-style: none;
    padding-inline: 0;
    grid-template-columns: repeat(8, 1fr);
  }
  .second {
    grid-column: 6 / 7;
  }
  .third {
    grid-column: 8 / 9;
  }
  @media screen and (max-width: 1200px) {
    ul,
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
