<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Web-home of Otaniyoz</title>
</svelte:head>

<Heading level={1}>
  Hallo, cyber-stranger. This is a web-home for <img alt="Illustration of a man" src="home-banner.jpg" /> Otaniyoz. A place for <Link href="{base}/projects" classes="large-text" outside={false}>various projects</Link> and <Link href="{base}/notes" classes="large-text" outside={false}>sporadic notes</Link>. All on, perhaps, too far spread topics and in too different languages. But I might be wrong, so don't take my word for it — go and see for yourself <img alt="Skull with beaming eye-sockets" src="skull.png" id="skull" />. Or don't
</Heading>

<style>
  #skull {
    height: calc(0.8*var(--line-height-regular));
    vertical-align: sub;
  }

  img {
    display: inline-block;
    vertical-align: text-bottom;
    height: var(--line-height-regular);
    width: auto;
  }
</style>
