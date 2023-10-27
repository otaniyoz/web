<script lang="ts">
  import List from "$lib/components/List.svelte";
  import Figure from "$lib/components/Figure.svelte";
  import Image from "$lib/components/Image.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
  import typographString from "../../../utils/typographString";
</script>

<svelte:head>
  <title>Redesigning Jep!</title>
</svelte:head>

<SectionGrid>
  <Heading level={1} classes="grid-col17" useInline={false}
    >{typographString("Redesigning Jep!")}</Heading
  >
  <p class="grid-col17">
    {typographString(
      "This is a concept redesign for Jep! -- a multiplayer online trivia created by Claire Nord. Most of the work was done in 20 hours. The main goal was to bring the interface up to date, while preserving core elements, scenarios, and game mechanics."
    )}
  </p>
</SectionGrid>
<SectionGrid>
  <List
    classes="grid-col17"
    listRows={[
      "This is an unofficial redesign and is not affiliated with Jep! in any way. However, some of the presented ideas were actually implemented, more on this later.",
    ]}
  >
    <Heading slot="title" level={3}>To be clear:</Heading>
  </List>
</SectionGrid>
<SectionGrid>
  <p class="grid-col17">
    {typographString(
      "Jep! is an homage to the American panel show Jeopardy. All the core elements of the show were meticulously replicated, even the sounds and animations! The idea is admirable and execution is top-notch. However, Jeopardy was designed for tv screen, in the 80s; trying to one-to-one map its design to modern web is bound to run into problems, especially on devices with smaller screens. This redesign addressed some of such problems."
    )}
  </p>
  <Figure classes="centered-visual grid regular-gap two-columns">
    <div>
      <p class="no-bottom-padding">Before</p>
      <Image
        src="../../jep-redesign/original_home_desktop.png"
        alt="Redesigning Jep!"
      />
    </div>
    <div>
      <p class="no-bottom-padding">After</p>
      <Image src="../../jep-redesign/home_desktop.png" alt="Redesigning Jep!" />
    </div>
    <div>
      <p class="no-bottom-padding">Before</p>
      <Image
        src="../../jep-redesign/original_help_desktop.png"
        alt="Redesigning Jep!"
      />
    </div>
    <div>
      <p class="no-bottom-padding">After</p>
      <Image src="../../jep-redesign/help_desktop.png" alt="Redesigning Jep!" />
    </div>
  </Figure>
  <p class="grid-col17">
    {typographString(
      "This redesign followed mobile-first approach, while making sure all the elements can nicely adapt to any screen size and prioritizing ease of navigation, clarity, and consistency."
    )}
  </p>
  <Figure classes="centered-visual grid regular-gap two-columns">
    <Image src="../../jep-redesign/home_mobile.png" alt="Redesigning Jep!" />
    <Image src="../../jep-redesign/help_mobile.png" alt="Redesigning Jep!" />
  </Figure>
  <p class="grid-col17">
    {typographString(
      "The core element of the game is a board. I remade the board to make it easily fit any screen dimension, while minimizing scrolling and noise."
    )}
  </p>
  <Figure classes="centered-visual grid regular-gap two-columns">
    <div>
      <p class="no-bottom-padding">Before</p>
      <Image
        src="../../jep-redesign/original_room.png"
        alt="redesigning jep!"
      />
    </div>
    <div>
      <p class="no-bottom-padding">After</p>
      <Image src="../../jep-redesign/room.png" alt="redesigning jep!" />
    </div>
  </Figure>
  <p class="grid-col17">
    {typographString(
      "To maximise the density of useful information, I created player cards. These player cards were later adapted and implemented in Jep!, like so:"
    )}
  </p>
  <Image
    classes="centered-visual"
    src="../../jep-redesign/player_card.png"
    alt="Redesigning Jep!"
  />
  <p class="grid-col17">
    {typographString(
      "Buzz-in interface was redesigned to minimize layout changes between game states:"
    )}
  </p>
  <Figure classes="centered-visual grid regular-gap two-columns">
    <div>
      <p class="no-bottom-padding">Before</p>
      <Image
        src="../../jep-redesign/original_buzzin.png"
        alt="Redesigning Jep!"
      />
    </div>
    <div>
      <p class="no-bottom-padding">After</p>
      <Image src="../../jep-redesign/buzzin.png" alt="Redesigning Jep!" />
    </div>
  </Figure>
  <p class="grid-col17">
    {typographString(
      "While at it, I also made a logo. It is based on the world map, because Jep! is an online group party game; to fit the whole world in a square I used the Mercator projection:"
    )}
  </p>
  <Image
    classes="centered-visual"
    src="../../jep-redesign/logo.png"
    alt="Redesigning Jep!"
  />
</SectionGrid>
