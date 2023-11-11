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
  </div>web-home for<div id="ot-container"><img id="ot" alt="Illustration of a man" src="ot.png" />Otaniyoz.</div> A quiet place for <Link
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
  >. All on, perhaps, too far spread topics and in too different languages. But I might be wrong, so don’t take my word for it — go and see for yourself. Or don’t
</Heading>

<style>
  img {
    width: auto;
    display: inline-block;
    vertical-align: text-bottom;
    height: var(--line-height-regular);
  }

  #ot {
    width: auto;
    z-index: -100;
    vertical-align: middle;
    height: calc(0.6*var(--line-height-regular));
    position: relative;
    margin-top: 0.5vmax;
    left: 0.5em;
  }

  #ot-container {
    display: inline-block;
    margin-left: -0.8vmax;
  }

  #suriken {
    aspect-ratio: 1 / 1;
    max-width: calc(0.9*var(--line-height-regular));
    max-height: calc(0.9*var(--line-height-regular));
    vertical-align: middle;
  }

  #suriken-container {
    z-index: -100;
    overflow: visible;
    position: relative;
    display: inline-block;
    max-height: calc(0.9*var(--line-height-regular));
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
