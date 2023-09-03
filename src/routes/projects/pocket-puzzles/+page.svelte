<script lang="ts">
  import List from "$lib/components/List.svelte";
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
      noteLink={[
        "https://otaniyoz.github.io/pocket-puzzles/",
        "https://github.com/otaniyoz/pocket-puzzles",
      ]}
      noteTitle={["Play online", "See code on Github"]}
    />
    <Paragraph
      paragraphContent="Pocket puzzles is a collection of puzzles designed to fit in a pocket: easy to start playing, easy to put away."
    />
  </article>
  <figure class="no-margin centered-visual-wide">
    <img src="../../pocket-puzzles/pp.png" alt="Pocket puzzles" />
  </figure>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <Paragraph
      paragraphContent="This is an experiment with the main goal of designing a low-effort game that can be enjoyed in a queue or on a short break from coding without inducing stress due to performance and standings or desire to play just one more round."
    />
  </article>
  <article class="narrative">
    <Paragraph paragraphContent="Right now, there are three puzzles. Each puzzle has three levels of difficulty and a scoring system based on the number of moves made." />
  </article>
  <figure class="no-margin centered-visual-wide grid-container three-columns">
    <img src="../../pocket-puzzles/pp-s.png" alt="Pocket puzzles" />
    <img src="../../pocket-puzzles/pp-p.png" alt="Pocket puzzles" />
    <img src="../../pocket-puzzles/pp-tt.png" alt="Pocket puzzles" />
  </figure>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <Paragraph
      paragraphContent="In Slide!, players need to restore a shuffled image to its initial state. On tap, tile moves to a free slot if possible."
    />
    <Paragraph
      paragraphContent="In Pairs, players need to find image pairs by tapping on shuffled tiles. On tap, tiles flip for a short duration to reveal hidden image."
    />
    <Paragraph
      paragraphContent="In That tile, players need to identify a tile that stands out from other tiles on the grid by tapping on it."
    />
  </article>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <Paragraph paragraphContent="Pocket puzzles is built with HTML, CSS, and JavaScript using Canvas API. Each image is procedurally generated from the Lissajous curve. Canvas API is used to draw every tile and the grid of tiles. Each puzzle is a separate class." />
  </article>
</SectionGrid>

<style>
  .narrative {
    grid-area: auto / 1 / auto / 7;
  }

  .centered-visual-wide {
    grid-area: auto / 2 / auto / 8;
  }

  .three-columns {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-container {
    display: grid;
    gap: var(--gap-small);
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
