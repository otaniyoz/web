<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
</script>

<svelte:head>
  <title>Concept landing page for a barrel of oil</title>
</svelte:head>

<SectionGrid>
  <article class="narrative">
    <Heading
      title="Landing page for a barrel of oil"
      level={1}
      useInline={false}
    />
    <Paragraph
      paragraphContent="This is a concept landing page for a barrel of oil, an exercise in design. Originally made in 2022, it was later updated. Version immediately below is the updated version. Original work can be found at the bottom of the page."
    />
  </article>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <Heading
      title="2023"
      level={2}
      useInline={false}
    />
  </article>
  <figure class="no-margin centered-visual-wide">
    <img alt="Landing page dark theme" src="../../oil-barrel/2023.jpg" />
  </figure>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <Heading
      title="2022"
      level={2}
      useInline={false}
    />
  </article>
  <figure class="no-margin centered-visual-wide">
    <img alt="Landing page dark theme" src="../../oil-barrel/2022.jpg" />
  </figure>
</SectionGrid>

<style>
  .narrative {
    grid-area: auto / 1 / auto / 7;
  }

  .centered-visual-wide {
    grid-area: auto / 2 / auto / 8;
  }

  @media screen and (max-width: 1220px) {
    .centered-visual-wide {
      grid-area: auto / 1 / auto / 7;
    }
  }

  .no-margin {
    margin: 0;
  }
</style>