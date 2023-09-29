<script lang="ts">
  import List from "$lib/components/List.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import CardsGrid from "$lib/components/CardsGrid.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
</script>

<svelte:head>
  <title>Concept note-taking app</title>
</svelte:head>

<SectionGrid>
  <article class="narrative">
    <Heading
      title="Pocket notes"
      level={1}
      useInline={false}
    />
    <Paragraph
      paragraphContent="This is a concept note-taking app, an exercise in design. Originally made in 2022."
    />
  </article>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <Heading
      title="2022"
      level={2}
      useInline={false}
    />
  </article>
  <figure class="no-margin centered-visual-wide grid-container three-columns">
    <img src="../../pocket-notes/home.png" alt="Pocket notes" />
    <img src="../../pocket-notes/note-select.png" alt="Pocket notes" />
    <img src="../../pocket-notes/note.png" alt="Pocket notes" />
    <img src="../../pocket-notes/note-copy-select.png" alt="Pocket notes" />
    <img src="../../pocket-notes/note-copy-success.png" alt="Pocket notes" />
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

  .three-columns {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-container {
    display: grid;
    gap: var(--gap-small);
  }

  .no-margin {
    margin: 0;
  }
</style>