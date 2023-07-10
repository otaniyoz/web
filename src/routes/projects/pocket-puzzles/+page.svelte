<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
</script>

<svelte:head>
  <title>Pocket puzzles</title>
</svelte:head>

<section id="page-section">
  <article id="intro">
    <Heading headingTitle="Pocket puzzles" headingLevel={2} />
    <Paragraph
      paragraphClass="grid-col-all"
      paragraphContent="This is an ongoing experiment in design and development to create a collection of puzzles:"
    />
  </article>
  <article id="gallery">
    <img id="img-1" src="../../pocket-puzzles/1.png" alt="Pocket puzzles" />
    <div id="col-1">
      <div class="image-wrapper">
        <img id="img-2" src="../../pocket-puzzles/2.png" alt="Pocket puzzles" />
      </div>
      <div class="image-wrapper">
        <img id="img-3" src="../../pocket-puzzles/3.png" alt="Pocket puzzles" />
      </div>
    </div>
    <div id="col-2">
      <img id="img-4" src="../../pocket-puzzles/4.png" alt="Pocket puzzles" />
      <img id="img-5" src="../../pocket-puzzles/5.png" alt="Pocket puzzles" />
    </div>
  </article>
</section>

<style>
  #page-section {
    display: grid;
    gap: var(--gap-small);
    grid-template-columns: repeat(8, 1fr);
  }

  #intro {
    display: grid;
    align-items: end;
    grid-area: 1 / 1 / auto / 7;
  }

  #gallery {
    display: grid;
    gap: var(--gap-small);
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, min-content);
    grid-area: auto / 2 / auto / 8;
  }

  #col-1,
  #col-2 {
    display: flex;
    gap: var(--gap-small);
    flex-flow: column nowrap;
    justify-content: flex-start;
  }

  #col-1 {
    grid-area: 2 / 1 / 3 / 4;
  }

  #col-2 {
    grid-area: 2 / 4 / 3 / 5;
  }

  #img-2,
  #img-3 {
    object-fit: scale-down;
  }

  #img-1 {
    grid-area: 1 / 1 / 2 / -1;
    object-fit: fill;
  }

  .image-wrapper {
    display: flex;
    justify-content: start;
  }

  @media screen and (max-width: 1200px) {
    #page-section {
      grid-template-columns: repeat(6, 1fr);
    }

    #intro {
      grid-area: 1 / 1 / auto / 7;
    }

    #gallery {
      grid-area: auto / 1 / auto / 7;
    }
  }
</style>
