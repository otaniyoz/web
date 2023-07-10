<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
</script>

<svelte:head>
  <title>Pocket puzzles</title>
</svelte:head>

<section class="page-section">
  <article>
    <Heading headingTitle="Pocket puzzles" headingLevel={2} />
    <Paragraph
      paragraphClass="grid-col14"
      paragraphContent="This is a collection of puzzles that fits in a pocket. Available online at https://otaniyoz.github.io/pocket-puzzles/"
    />
    <div id="gallery">
      <img id="img-1" src="../../pocket-puzzles/1.png" />
      <img id="img-2" src="../../pocket-puzzles/2.png" />
      <img id="img-3" src="../../pocket-puzzles/3.png" />
      <img id="img-4" src="../../pocket-puzzles/4.png" />
      <img id="img-5" src="../../pocket-puzzles/5.png" />
    </div>
  </article>
</section>

<style>
  article {
    display: grid;
    gap: var(--gap-small);
    row-gap: var(--gap-regular);
    grid-area: auto / 1 / auto / 5;
  }

  #gallery {
    display: grid;
    gap: var(--gap-small);
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, min-content);
    grid-area: auto / 1 / auto / 5;
  }

  img {
    object-fit: scale-down; 
  }

  #img-1 {
    grid-area: 1 / 1 / 2 / 13;
  }

  #img-2 {
    grid-area: 2 / 1 / 3 / 10;
  }

  #img-3 {
    grid-area: 3 / 4 / 4 / 13;
  }

  #img-4 {
    grid-area: 3 / 1 / 4 / 4;
  }

  #img-5 {
    grid-area: 2 / 10 / 3 / 13;
  }

  @media screen and (min-width: 1200px) {
    article {
      grid-area: 1 / 1 / auto / 5;
    }
  }
</style>
