<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import typographString from "../../../utils/typographString";
</script>

<svelte:head>
  <title>Pocket puzzles</title>
</svelte:head>

<section>
  <Heading classes="grid-col17" level={1}>
    {typographString("Pocket puzzles")}
    <svelte:fragment slot="subtitles">
      <Link classes="regular-weight regular-size regular-right-margin" href="https://otaniyoz.github.io/pocket-puzzles">Play online</Link>
      <Link classes="regular-weight regular-size regular-right-margin" href="https://github.com/otaniyoz/pocket-puzzles" outside={true}>See code on Github</Link>
    </svelte:fragment>
  </Heading>
  <p class="grid-col17">{typographString("Pocket puzzles is a collection of puzzles designed to fit in a pocket: easy to start playing, easy to put away.")}</p>
  <img class="centered-visual" src="../../pocket-puzzles/pp.png" alt="Pocket puzzles" />
</section>
<section>
  <p class="grid-col17">{typographString("This is an experiment with the main goal of designing a low-effort game that can be enjoyed in a queue or on a short break from coding without inducing stress due to performance and standings or desire to play just one more round.")}</p>
  <p class="grid-col17">{typographString("Right now, there are three puzzles. Each puzzle has three levels of difficulty and a scoring system based on the number of moves made.")}</p>
  <figure class="no-margin centered-visual grid no-gap three-columns">
    <div class="regular-right-padding"><img src="../../pocket-puzzles/pp-s.png" alt="Pocket puzzles" /></div>
    <div class="regular-right-padding"><img src="../../pocket-puzzles/pp-p.png" alt="Pocket puzzles" /></div>
    <div class="regular-right-padding"><img src="../../pocket-puzzles/pp-tt.png" alt="Pocket puzzles" /></div>
  </figure>
  <p class="grid-col17">{typographString("In Slide!, players need to restore a shuffled image to its initial state. On tap, tile moves to a free slot if possible.")}</p>
  <p class="grid-col17">{typographString("In Pairs, players need to find image pairs by tapping on shuffled tiles. On tap, tiles flip for a short duration to reveal hidden image.")}</p>
  <p class="grid-col17">{typographString("In That tile, players need to identify a tile that stands out from other tiles on the grid by tapping on it.")}</p>
</section>
