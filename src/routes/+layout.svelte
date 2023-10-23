<script>
  import "../styles/app.css";
  import "../styles/fonts.css";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import { base } from "$app/paths";
</script>

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
  <article class="footer-text">
    <Paragraph paragraphContent="Created by Otaniyoz in 2023" />
    <Paragraph paragraphContent="ここにいてもいいから" />
  </article>
  <article class="footer-image">
    <img id="suriken" src="{base}/favicon.png" alt="Suriken" class="rotating" />
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
    grid-template-rows: repeat(1, 1fr);
  }

  .footer-text {
    grid-column: 1 / -2;
  }

  #suriken {
    max-width: 48px;
    max-height: 48px;
    aspect-ratio: 1 / 1;
  }

  .footer-image {
    text-align: right;
    overflow: hidden;
    grid-column: -2 / -1;
  }

  @keyframes continuous-rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .rotating {
    animation: continuous-rotation 5s linear infinite;
  }

  header {
    position: sticky;
    top: var(--gap-small);
    padding-bottom: var(--gap-xxlarge);
    width: 100%;
  }

  li {
    padding: 0;
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-small);
  }

  .second {
    grid-column: 6 / 7;
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
