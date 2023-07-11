<script lang="ts">
  import Heading from "./Heading.svelte";
  import Paragraph from "./Paragraph.svelte";

  export let title: string;
  export let superTitle: string;
  export let level: number;
</script>

<article>
  <Heading headingTitle={title} headingLevel={level} />
  <aside>
    <Paragraph paragraphContent={"(" + superTitle + ")"} />
  </aside>
</article>

<style>
  article {
    display: flex;
    flex-flow: row nowrap;
    gap: var(--gap-small);
    width: 100%;
  }

  aside {
    min-width: fit-content;
  }

  @media screen and (min-width: 1200px) {
    aside {
      padding-top: 0;
    }
  }
</style>
