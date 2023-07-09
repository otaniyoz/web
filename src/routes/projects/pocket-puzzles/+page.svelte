<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
</script>

<svelte:head>
  <title>Pocket puzzles</title>
</svelte:head>

<section class="page-section">
  <article>
    <Heading
      headingTitle="Pocket puzzles"
      headingLevel={2}
    />
    <img
      alt="A screen of an app showing sliding tiles puzzle in the unsolved state"
      class="grid-col14"
      src="../../pocket-puzzles/light-screenshot.png"
    />
    <img
      alt="A screen of an app showing sliding tiles puzzle in the unsolved state"
      class="grid-col14"
      src="../../pocket-puzzles/dark-screenshot.png"
    />
    <Paragraph
      paragraphClass="grid-col14"
      paragraphContent="Available online at https://otaniyoz.github.io/pocket-puzzles/"
    />
  </article>
</section>

<style>
  img {
    height: 100%;
    max-width: 100%;
    aspect-ratio: auto;
  }

  article {
    display: grid;
    gap: var(--gap-small);
    row-gap: var(--gap-regular);
    grid-area: auto / 1 / auto / 5;
  }

  @media screen and (min-width: 1200px) {
    article {
      grid-area: 1 / 1 / auto / 5;
    }
  }
</style>
