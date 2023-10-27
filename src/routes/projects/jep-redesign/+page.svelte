<script lang="ts">
  import List from "$lib/components/List.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
  import typographString from "../../../utils/typographString";
</script>

<svelte:head>
  <title>Redesigning Jep!</title>
</svelte:head>

<SectionGrid>
  <article class="narrative">
    <Heading level={1} useInline={false}
      >{typographString("Redesigning Jep!")}</Heading
    >
    <p>
      {typographString(
        "This is a concept redesign for Jep! -- a multiplayer online trivia created by Claire Nord. Most of the work was done in 20 hours. The main goal was to bring the interface up to date, while preserving core elements, scenarios, and game mechanics."
      )}
    </p>
  </article>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <List
      listRows={[
        "This is an unofficial redesign and is not affiliated with Jep! in any way. However, some of the presented ideas were actually implemented, more on this later.",
      ]}
    >
      <Heading slot="title" level={3}>To be clear:</Heading>
    </List>
  </article>
</SectionGrid>
<SectionGrid>
  <p class="narrative">
    {typographString(
      "Jep! is an homage to the American panel show Jeopardy. All the core elements of the show were meticulously replicated, even the sounds and animations! The idea is admirable and execution is top-notch. However, Jeopardy was designed for tv screen, in the 80s; trying to one-to-one map its design to modern web is bound to run into problems, especially on devices with smaller screens. This redesign addressed some of such problems. Here is the side-by-side comparison, on the left is the original design and on the right is this redesign:"
    )}
  </p>
  <figure class="no-margin centered-visual-wide grid-container two-columns">
    <img
      src="../../jep-redesign/original_home_desktop.png"
      alt="Redesigning Jep!"
    />
    <img src="../../jep-redesign/home_desktop.png" alt="Redesigning Jep!" />
    <img
      src="../../jep-redesign/original_help_desktop.png"
      alt="Redesigning Jep!"
    />
    <img src="../../jep-redesign/help_desktop.png" alt="Redesigning Jep!" />
  </figure>
</SectionGrid>
<SectionGrid>
  <p class="narrative">
    {typographString(
      "This redesign followed mobile-first approach, while making sure all the elements can nicely adapt to any screen size and prioritizing ease of navigation, clarity, and consistency:"
    )}
  </p>
  <figure class="no-margin centered-visual-wide grid-container two-columns">
    <img src="../../jep-redesign/home_mobile.png" alt="Redesigning Jep!" />
    <img src="../../jep-redesign/help_mobile.png" alt="Redesigning Jep!" />
  </figure>
</SectionGrid>
<SectionGrid>
  <p class="narrative">
    {typographString(
      "The core element of the game is a board. I remade the board to make it easily fit any screen dimension, while minimizing scrolling and noise. Here is the side-by-side comparison, on the left is the original design and on the right is this redesign:"
    )}
  </p>
  <figure class="no-margin centered-visual-wide grid-container two-columns">
    <img src="../../jep-redesign/original_room.png" alt="redesigning jep!" />
    <img src="../../jep-redesign/room.png" alt="redesigning jep!" />
  </figure>
</SectionGrid>
<SectionGrid>
  <p class="narrative">
    {typographString(
      "To maximise the density of useful information, I created player cards. These player cards were later adapted and implemented in Jep!, like so:"
    )}
  </p>
  <figure class="no-margin centered-visual-wide">
    <img src="../../jep-redesign/player_card.png" alt="Redesigning Jep!" />
  </figure>
</SectionGrid>
<SectionGrid>
  <p class="narrative">
    {typographString(
      "Buzz-in interface was redesigned to minimize layout changes between game states:"
    )}
  </p>
  <figure class="no-margin centered-visual-wide grid-container two-columns">
    <img src="../../jep-redesign/original_buzzin.png" alt="redesigning jep!" />
    <img src="../../jep-redesign/buzzin.png" alt="redesigning jep!" />
  </figure>
</SectionGrid>
<SectionGrid>
  <p class="narrative">
    {typographString(
      "While at it, I also made a logo. It is based on the world map, because Jep! is an online group party game; to fit the whole world in a square I used the Mercator projection:"
    )}
  </p>
  <figure class="no-margin centered-visual-wide">
    <img src="../../jep-redesign/logo.png" alt="Redesigning Jep!" />
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

  .two-columns {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-container {
    display: grid;
    gap: var(--gap-small);
  }

  .no-margin {
    margin: 0;
  }

  img {
    object-fit: contain;
  }
</style>
