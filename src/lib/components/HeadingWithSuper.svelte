<script lang="ts">
  import Heading from "./Heading.svelte";
  import Paragraph from "./Paragraph.svelte";

  export let title: string;
  export let superTitle: string;
  export let level: number;
</script>

<div class="heading-wrapper">
  <Heading headingTitle={title} headingLevel={level} />
  <aside>
    <Paragraph paragraphContent={"(" + superTitle + ")"} />
  </aside>
</div>

<style>
  .heading-wrapper {
    display: flex;
    flex-flow: row nowrap;
  }

  aside {
    padding-left: var(--gap-small);
    min-width: fit-content;
  }
</style>
