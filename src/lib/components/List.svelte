<script lang="ts">
  import Heading from "./Heading.svelte";
  import typographString from "../../utils/typographString";

  export let listRows: string[];
  export let showIndex: boolean = false;
  export let listTitle: string = "";
  export let listDescription: string = "";

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

<article>
  {#if listTitle}
    <Heading level={3}>
      {typographString(listTitle)}</Heading
    >
  {/if}
  {#if listDescription}
    <p>
      {listDescription}
    </p>
  {/if}
  {#each listRows as row, rowIndex}
    <div class="row">
      <p
        class="list-index {showIndex ? 'visually-visible' : 'visually-hidden'}"
      >
        {rowIndex + 1}.
      </p>
      <p>
        {row}
      </p>
    </div>
  {/each}
</article>

<style>
  .visually-hidden {
    visibility: hidden;
  }

  .visually-visible {
    visibility: visible;
  }

  .row {
    display: flex;
    flex-flow: row nowrap;
  }

  .list-index {
    color: var(--color-dark);
    padding: 0 var(--gap-small) 0 var(--gap-large);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-regular);
  }

  p {
    margin-block: 0;
    color: var(--color-dark);
    font-size: var(--font-size-regular);
    line-height: var(--line-height-large);
    padding-bottom: var(--gap-regular);
  }
</style>
