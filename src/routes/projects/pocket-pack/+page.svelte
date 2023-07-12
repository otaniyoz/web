<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
</script>

<svelte:head>
  <title>Pocket pack: a collection of utilites and games</title>
</svelte:head>

<SectionGrid>
  <article class="narrative">
    <Heading
      headingTitle="Pocket pack: a collection of utilities and games"
      headingLevel={2}
    />
    <Paragraph
      paragraphContent="In 2022, I designed and developed a collection of small utilies and games for personal use. Over time they grew into a SvelteKit app with dark and light themes, adaptive layout, and what-not. At some point even wanted to put the whole thing online, but didn't."
    />
  </article>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <Heading headingTitle="Editor with improved typography" headingLevel={3} />
    <Paragraph
      paragraphContent="It all started with the desire to have my text nicely formatted, so I wrote a utility to automatically improve typography in Russian and English texts, then added a GUI:"
    />
  </article>
  <figure class="centered-visual-narrow">
    <img
      alt="A screen of an app showing badly and nicely formatted texts"
      src="../../pocket-pack/1.png"
    />
  </figure>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <Heading headingTitle="Tiles-based puzzles" headingLevel={3} />
    <Paragraph
      paragraphContent="Then added some puzzles that I enjoy playing. They are based on flipping and sliding tiles. Everything is drawn with the Canvas API, parametric equations, and lots of trigonometry:"
    />
  </article>
  <figure class="visual grid-container four-columns">
    <img
      alt="A screen of an app showing sliding tiles puzzle in the unsolved state"
      src="../../pocket-pack/3.png"
    />
    <img
      alt="A screen of an app showing sliding tiles puzzle in the solved state"
      src="../../pocket-pack/4.png"
    />
    <img
      alt="A screen of an app showing a memory game based on finding matching pairs in the unsolved state"
      src="../../pocket-pack/5.png"
    />
    <img
      alt="A screen of an app showing the memory game in the solved state"
      src="../../pocket-pack/6.png"
    />
  </figure>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <Heading headingTitle="Step sequencer" headingLevel={3} />
    <Paragraph
      paragraphContent="Afterwards I created a step sequencer so that I could listen to some music while writing nicely formatted texts or solving puzzles:"
    />
  </article>
  <figure class="visual grid-container two-columns">
    <img
      alt="A screen of an app showing a step sequencer"
      src="../../pocket-pack/7.png"
    />
    <img
      alt="A screen of an app showing a step sequencer in the play mode"
      src="../../pocket-pack/8.png"
    />
  </figure>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <Heading headingTitle="Concept redesign" headingLevel={3} />
    <Paragraph
      paragraphContent="At some point wanted to put the app online, so started redesigning it in Figma. Even though I decided not to go through with this idea, I did finish some design mockups. Here they are:"
    />
  </article>
  <figure class="visual grid-container four-columns">
    <img
      alt="A concept logo for a note-taking app"
      src="../../pocket-pack/9.png"
    />
    <img
      alt="A concept logo for a puzzle-solving app"
      src="../../pocket-pack/10.png"
    />
    <img
      alt="A concept logo for a step sequencer app"
      src="../../pocket-pack/13.png"
    />
    <img
      alt="Another concept logo for a step sequencer app"
      src="../../pocket-pack/14.png"
    />
    <img
      alt="A screen of an app showing tiles based puzzle in the initial state"
      src="../../pocket-pack/11.png"
    />
    <img alt="A screen of a note-taking app" src="../../pocket-pack/12.png" />
    <img
      alt="A screen of a note-taking app with a selected note"
      src="../../pocket-pack/15.png"
    />
    <img
      alt="A screen of a note-taking app with an opened note"
      src="../../pocket-pack/16.png"
    />
    <img
      alt="A screen of a note-taking app with an opened note and copied text"
      src="../../pocket-pack/17.png"
    />
    <img
      alt="A screen of a note-taking app with an opened note and copied text confirmation"
      src="../../pocket-pack/18.png"
    />
  </figure>
</SectionGrid>

<style>
  .narrative {
    grid-area: auto / 1 / auto / 7;
  }

  .visual {
    grid-area: auto / 1 / auto / -1;
  }

  .centered-visual-narrow {
    grid-area: auto / 3 / auto / 7;
  }

  @media screen and (max-width: 1220px) {
    .centered-visual-narrow {
      grid-area: auto / 1 / auto / 7;
    }
  }

  figure {
    margin: 0;
    padding-bottom: var(--gap-large);
  }

  .grid-container {
    display: grid;
    gap: var(--gap-small);
  }

  .two-columns {
    grid-template-columns: repeat(2, 1fr);
  }

  .four-columns {
    grid-template-columns: repeat(4, 1fr);
  }
</style>
