<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
</script>

<svelte:head>
  <title>Web-home of Otaniyoz</title>
</svelte:head>

<h1>
  Hallo, cyber-stranger. This is a web-home for <img
    alt="Stylized photograph of a man"
    src="home-banner.jpg"
  /> Otaniyoz. A place for various projects and sporadic notes. All on, perhaps,
  too far spread topics and in too different languages. But I might be wrong about
  it, so don't take my word for it — go and see for yourself. Or don't
</h1>

<style>
  img {
    aspect-ratio: 1 / 1;
    display: inline-block;
    vertical-align: text-bottom;
    width: var(--line-height-regular);
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
