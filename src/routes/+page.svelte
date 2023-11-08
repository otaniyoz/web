<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Web-home of Otaniyoz</title>
</svelte:head>

<Heading level={1}>
  Hallo, cyber-stranger. →This← is a <div id="suriken-container">
    <img
      id="suriken"
      src="{base}/favicon.png"
      alt="Rotating suriken"
      class="rotating"
    />
  </div>web-home for <img alt="Illustration of a man" src="home-banner.jpg" />Otaniyoz.
  A place for <Link
    target="_self"
    href="{base}/pomes"
    classes="large-size xregular-line-height"
    outside={false}>pomes</Link
  >, <Link
    target="_self"
    href="{base}/projects"
    classes="large-size xregular-line-height"
    outside={false}>various projects</Link
  >, and <Link
    target="_self"
    href="{base}/notes"
    classes="large-size xregular-line-height"
    outside={false}>sporadic notes</Link
  >. All on, perhaps, too far spread topics and in too different languages. But
  I might be wrong, so don't take my word for it — go and see for yourself
  <img alt="Skull with beaming eye-sockets" src="skull.png" id="skull" />. Or
  don't
</Heading>

<style>
  img {
    display: inline-block;
    vertical-align: text-bottom;
    height: var(--line-height-regular);
    width: auto;
  }

  #skull {
    height: calc(0.8 * var(--line-height-regular));
    vertical-align: sub;
  }

  #suriken {
    max-width: var(--line-height-regular);
    max-height: var(--line-height-regular);
    aspect-ratio: 1 / 1;
  }

  #suriken-container {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
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
</style>
