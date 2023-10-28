<script lang="ts">
  import List from "$lib/components/List.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
  import typographString from "../../../utils/typographString";
</script>

<svelte:head>
  <title>Redesigning Telegram's Android app</title>
</svelte:head>

<SectionGrid>
  <Heading classes="grid-col17" level={1} useInline={false}>
    {typographString("Redesigning Telegram's Android app")}
  </Heading>
  <p class="grid-col17">
    {typographString(
      "This is a concept redesign for Telegram's Android app. It was made in around 48 hours. The main goal was to update existing elements based on Material Design 3 guidelines, while maintaining app's core essence and lightweight feel. Along the way, I made some icons and rewrote some interface text. Everything was done in Figma using components, styles, variables, tokens, hands, eyes, a-a-and a brain!"
    )}
  </p>
  <List
    classes="grid-col17"
    listRows={[
      "This is an unofficial redesign and is not affiliated with or endorsed by Telegram in any way.",
    ]}
  >
    <Heading slot="title" level={3}>To be clear:</Heading>
  </List>
  <List
    classes="grid-col17"
    listRows={[
      "introduced a bottom navigation bar with an elevated primary floating action button and four segments",
      "replaced the hamburger menu in the left corner of the top bar with user avatar in the right corner",
      "replaced currently used text-based ads with animated banners",
    ]}
  >
    <p slot="description">
      {typographString(
        "Currently app's main screen is a list of all chats with two floating action buttons. Redesign"
      )}
    </p>
  </List>
  <figure class="centered-visual grid small-gap two-columns">
    <img src="../../tg-redesign/chat-list.png" alt="Chat list view redesign" />
    <img
      src="../../tg-redesign/chat-list-on-scroll.png"
      alt="Chat list view redesign"
    />
  </figure>
</SectionGrid>
<SectionGrid>
  <p class="grid-col17">
    {typographString(
      "Animated ad banners maintain informative nature of currently used text-based ads while introducing colourful look in the spirit of Telegram's inherent playfulness. They also adapt to different container sizes making them more versatile:"
    )}
  </p>
  <figure class="centered-visual">
    <img src="../../tg-redesign/ad-banners.png" alt="Chat list view redesign" />
  </figure>
</SectionGrid>
<SectionGrid>
  <p class="grid-col17">
    {typographString(
      "Pressing FAB in the bottom navigation bar opens up a full-screen menu. Quick action buttons are represented by Material Design 3 outlined buttons in a flex-row with wrap. On scroll, they collapse into a scrollable no-wrap flex-row:"
    )}
  </p>
  <figure class="centered-visual grid small-gap two-columns">
    <img
      src="../../tg-redesign/quick-actions-view.png"
      alt="Chat list view redesign"
    />
    <img
      src="../../tg-redesign/quick-actions-view-on-scroll.png"
      alt="Chat list view redesign"
    />
  </figure>
</SectionGrid>
<SectionGrid>
  <p class="grid-col17">
    {typographString(
      "User profiles including channel and group info-pages were updated using the aforementioned principles and components:"
    )}
  </p>
  <figure class="centered-visual grid small-gap three-columns">
    <img
      src="../../tg-redesign/user-info.png"
      alt="Telegram Android app redesign concept"
    />
    <img
      src="../../tg-redesign/user-info-on-scroll.png"
      alt="Telegram Android app redesign concept"
    />
    <img
      src="../../tg-redesign/user-info-collapsed.png"
      alt="Telegram Android app redesign concept"
    />
  </figure>
</SectionGrid>
<SectionGrid>
  <p class="grid-col17">
    {typographString(
      "Almost all interface elements are purposefuly based on Material Design 3 kit. However, due to Telegram's brain-wrinkling complexity and functionality, some elements had to be designed from scratch or from significantly modified system elements. For example, here are some of the custom icons that were made either from scratch or by modifying default icons:"
    )}
  </p>
  <figure class="centered-visual" id="icons-gif-container">
    <video muted autoplay loop id="icons-gif"
      ><source
        src="../../tg-redesign/custom-icons.mp4"
        type="video/mp4"
      /></video
    >
  </figure>
</SectionGrid>
<SectionGrid>
  <p class="grid-col17">
    {typographString(
      "In toto, more than 50 screens were designed to cover different component states, user perspectives, and various scenarios:"
    )}
  </p>
  <figure class="centered-visual">
    <img
      src="../../tg-redesign/screens-overview.png"
      alt="Telegram Android app redesign concept"
    />
  </figure>
</SectionGrid>

<style>
  #icons-gif {
    max-width: 320px;
    aspect-ratio: 1 / 1;
  }

  #icons-gif-container {
    text-align: center;
  }

  img,
  video {
    object-fit: contain;
  }
</style>
