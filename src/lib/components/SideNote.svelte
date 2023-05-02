<script lang="ts">
  import typographString from "../../utils/typographString";

  export let sidenoteImage: string;
  export let sidenoteText: string;

  sidenoteText = typographString(sidenoteText);
</script>

<article class="sidenote-container grid-col14">
  <img
    alt="Illustration for sidenote"
    class="sidenote sidenote-image"
    src={sidenoteImage}
  />
  <p class="sidenote">
    {sidenoteText}
  </p>
</article>

<style>
  .sidenote-image {
    width: 100%;
    aspect-ratio: auto;
  }

  .sidenote {
    scroll-snap-align: start;
  }

  .sidenote-container {
    scroll-snap-type: inline mandatory;
    overscroll-behavior-inline: contain;
    overflow-x: auto;
    display: grid;
    gap: var(--gap-large);
    grid-auto-flow: column;
    grid-auto-columns: 77%;
  }

  @media screen and (min-width: 1200px) {
    .sidenote-container {
      overflow-x: visible;
      grid-auto-columns: 73%;
    }
  }
</style>
