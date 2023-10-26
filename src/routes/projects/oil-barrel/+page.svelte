<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
  import typographString from "../../../utils/typographString";
</script>

<svelte:head>
  <title>Concept landing page for a barrel of oil</title>
</svelte:head>

<SectionGrid>
  <article class="narrative">
    <Heading level={1} useInline={false}>
      {typographString("Landing page for a barrel of oil")}
    </Heading>
    <Paragraph
      paragraphContent="This is a concept landing page for a barrel of oil, an exercise in design. Originally made in 2022."
    />
  </article>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <Heading level={2} useInline={false}>2022</Heading>
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
