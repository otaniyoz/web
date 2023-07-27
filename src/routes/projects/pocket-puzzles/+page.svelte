<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
</script>

<svelte:head>
  <title>Pocket puzzles</title>
</svelte:head>

<SectionGrid>
  <article class="narrative">
    <Heading
      title="Pocket puzzles"
      level={1}
      useInline={false}
      noteLink={["https://otaniyoz.github.io/pocket-puzzles/", "https://github.com/otaniyoz/pocket-puzzles"]}
      noteTitle={["Play online", "See code on Github"]}
    />
    <Paragraph
      paragraphContent="This is an ongoing experiment in design and development:"
    />
  </article>
  <figure class="centered-visual-wide">
    <img id="img-1" src="../../pocket-puzzles/1.png" alt="Pocket puzzles" />
    <div id="col-1">
      <div class="image-wrapper">
        <img id="img-2" src="../../pocket-puzzles/2.png" alt="Pocket puzzles" />
      </div>
    </div>
    <div id="col-2">
      <img id="img-4" src="../../pocket-puzzles/4.png" alt="Pocket puzzles" />
    </div>
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

  figure {
    margin: 0;
    display: grid;
    gap: var(--gap-small);
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, min-content);
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

  #img-2 {
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
</style>
