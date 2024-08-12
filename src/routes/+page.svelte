<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Web-home of Otaniyoz</title>
</svelte:head>

<Heading level={1}>
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
    margin-top: 0.65vmax;
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
