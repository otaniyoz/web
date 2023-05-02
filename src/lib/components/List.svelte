<script lang="ts">
  import typographString from "../../utils/typographString";
  import Heading from "./Heading.svelte";

  export let listRows: string[];
  export let showIndex: boolean = false;
  export let listTitle: string | undefined;
  export let listDescription: string | undefined;

  if (listTitle && listTitle.length) {
    listTitle = typographString(listTitle);
  }
  if (listDescription && listDescription.length) {
    listDescription = typographString(listDescription);
  }
  for (let i = 0; i < listRows.length; i++) {
    listRows[i] = typographString(listRows[i]);
  }
</script>

<article class="list grid-col14">
  {#if listTitle}
    <Heading headingTitle={listTitle} headingLevel={3} />
  {/if}
  {#if listDescription}
    <p class="grid-col14">
      {listDescription}
    </p>
  {/if}
  {#each listRows as row, rowIndex}
    <p class="list-index {showIndex ? 'visually-visible' : 'visually-hidden'}">
      {rowIndex + 1}.
    </p>
    <p class="grid-col23">
      {row}
    </p>
  {/each}
</article>

<style>
  .visually-hidden {
    visibility: hidden;
  }

  .visually-visible {
    visibility: visible;
  }

  .list {
    display: grid;
    gap: var(--gap-small);
  }

  .list-index {
    grid-column: 1;
    align-self: start;
    justify-self: end;
    color: var(--color-dark);
    padding: 0 0 0 var(--gap-large);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-regular);
  }
</style>
