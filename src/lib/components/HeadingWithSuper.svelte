<script lang="ts">
  import Heading from "./Heading.svelte";
  import Paragraph from "./Paragraph.svelte";

  export let title: string;
  export let superTitle: string;
  export let level: number;
</script>

<article class="counter-container">
  <Heading headingTitle={title} headingLevel={level} />
  <aside class="count">
    <Paragraph
      paragraphClass="grid-col14"
      paragraphContent={"(" + superTitle + ")"}
    />
  </aside>
</article>

<style>
  .counter-container {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
  }

  .count {
    min-width: fit-content;
    padding-top: var(--gap-large);
  }

  @media screen and (min-width: 1200px) {
    .count {
      padding-top: 0;
    }
  }
</style>
