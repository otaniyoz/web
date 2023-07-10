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
      <div id="col-1">
        <div class="image-wrapper">
          <img id="img-2" src="../../pocket-puzzles/2.png" />
        </div>
        <div class="image-wrapper">
          <img id="img-3" src="../../pocket-puzzles/3.png" />
        </div>
      </div>
      <div id="col-2">
        <img id="img-4" src="../../pocket-puzzles/4.png" />
        <img id="img-5" src="../../pocket-puzzles/5.png" />
      </div>
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

  #col-1,
  #col-2 {
    display: flex;
    gap: var(--gap-small);
    flex-flow: column nowrap;
    justify-content: flex-start;
  }

  #col-1 {
    flex-shrink: 2;
    flex-grow: 2;
    flex-basis: 160px;
    grid-area: 2 / 1 / 3 / 10;
  }

  #col-2 {
    grid-area: 2 / 10 / 3 / 13;
  }

  #img-2,
  #img-3 {
    object-fit: scale-down;
  }

  #img-1 {
    grid-area: 1 / 1 / 2 / 13;
    object-fit: fill;
  }

  .image-wrapper {
    display: flex;
    justify-content: start;
  }

  @media screen and (min-width: 1200px) {
    article {
      grid-area: 1 / 1 / auto / 5;
    }
  }
</style>
