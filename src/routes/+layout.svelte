<script>
  import "../styles/app.css";
  import "../styles/fonts.css";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import typographString from "../utils/typographString";
</script>

<header>
  <div id="backdrop" />
  <nav class="small-padding">
    <ul>
      <li>
        <a
          href={base}
          class:orange-text={$page.url.pathname.endsWith(base + "/")}>About</a
        >
      </li>
      <li class="second">
        <a
          href="{base}/projects"
          class:orange-text={$page.url.pathname.includes("projects")}
          >Projects</a
        >
      </li>
      <li class="text-right third">
        <a
          href="{base}/notes"
          class:orange-text={$page.url.pathname.includes("notes")}>Notes</a
        >
      </li>
    </ul>
  </nav>
</header>
<main>
  <slot />
</main>
<footer>
  <p>{typographString("Created by Otaniyoz in 2023")}</p>
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
    -webkit-mask-image: linear-gradient(
      rgb(242, 242, 245) 0%,
      rgba(242, 242, 245, 0.75) 50%,
      rgba(242, 242, 245, 0) 100%
    );
    mask-image: linear-gradient(
      rgb(242, 242, 245) 0%,
      rgba(242, 242, 245, 0.75) 50%,
      rgba(242, 242, 245, 0) 100%
    );
  }

  main {
    padding: var(--gap-small);
    min-height: calc(100vh - var(--footer-height));
  }

  footer {
    display: grid;
    margin-top: var(--gap-xxlarge);
    grid-template-columns: repeat(8, 1fr);
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
