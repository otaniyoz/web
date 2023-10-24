<script>
  import "../styles/app.css";
  import "../styles/fonts.css";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import { base } from "$app/paths";
</script>

<header>
  <div id="backdrop" />
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
  #backdrop {
    width: 100%;
    height: 100%;
    z-index: -100;
    position: absolute;
    pointer-events: none;
    background: rgba(242, 242, 245, 0.25);
    backdrop-filter: blur(var(--gap-xlarge));
    -webkit-mask-image: linear-gradient(rgb(242, 242, 245) 15%, rgba(242, 242, 245, 0) 100%);
    mask-image: linear-gradient(rgb(242, 242, 245) 15%, rgba(242, 242, 245, 0) 100%);
  }

  main {
    padding: var(--gap-small);
    min-height: calc(100vh - var(--footer-height));
  }

  footer {
    display: grid;
    margin-top: var(--gap-xxlarge);
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(8, 1fr);
    border-top: 1px solid var(--color-dark);
    padding: var(--gap-xlarge) var(--gap-small);
  }

  header {
    top: 0;
    position: sticky;
    padding-bottom: var(--gap-xxlarge);
  }

  li {
    padding: 0;
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-small);
  }

  nav {
    padding: var(--gap-small);
  }

  ul {
    padding: 0; 
    display: grid;
    margin-block: 0;
    list-style: none;
    padding-inline: 0;
    grid-template-columns: repeat(8, 1fr);
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

  .second {
    grid-column: 6 / 7;
  }

  .third {
    grid-column: 8 / 9;
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
