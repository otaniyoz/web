<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
</script>

<svelte:head>
  <title>Web-home of Otaniyoz</title>
</svelte:head>

<Heading title="About" level={1} noteTitle={["(me)"]}/>
<figure>
  <img alt="Stylized photograph of a man" src="home-banner.jpg" />
</figure>
<SectionGrid>
  <div class="narrative">
    <Paragraph
      paragraphContent="Hallo, cyber-stranger. This is a web-home for Otaniyoz. Here you can find various projects and sporadic notes -- all on perhaps too far spread topics and in too different languages. But I might just as well be wrong, so don't take my word for it -- go and see for yourself. Or don't ¯\_(ツ)_/¯"
    />
  </div>
</SectionGrid>

<style>
 .narrative {
    grid-area: auto / 1 / auto / 7;
  }

  figure {
    margin: 0;
    aspect-ratio: 1 / 1.25;
    padding-bottom: var(--gap-regular);
  }

  @media screen and (min-width: 1200px) {
    figure {
      aspect-ratio: 2 / 1;
    }
  }
</style>
