<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Web-home of Otaniyoz</title>
</svelte:head>

<h1>
   Hallo, cyber-stranger. This is a web-home for <img alt="Illustration of a man" src="home-banner.jpg" /> Otaniyoz. A place for <Link href="{base}/projects" text="various projects" outside={false} /> and <Link href="{base}/notes" text="sporadic notes" outside={false} />. All on, perhaps, too far spread topics and in too different languages. But I might be wrong, so don't take my word for it — go and see for yourself <img alt="Skull with beaming eye-sockets" src="skull.png" id="skull" />. Or don't
</h1>

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

  h1 {
    padding: 0;
    margin-block: 0;
    word-spacing: -0.05em;
    margin-left: -0.2vmax;
    letter-spacing: -0.025em;
    color: var(--color-dark);
    line-height: var(--line-height-regular);
    font-weight: var(--font-weight-heavy);
    font-size: var(--font-size-large);
  }

  @media screen and (min-width: 1200px) {
    h1 {
      hyphens: auto;
      margin-left: -0.35vmax;
      padding-bottom: var(--gap-xlarge);
    }
  }

  @media screen and (max-width: 1200px) {
    h1 {
      padding-bottom: var(--gap-xlarge);
    }
  }
</style>
