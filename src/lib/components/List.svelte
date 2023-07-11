<script lang="ts">
  import Heading from "./Heading.svelte";
  import typographString from "../../utils/typographString";

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

<article>
  {#if listTitle}
    <Heading headingTitle={listTitle} headingLevel={3} />
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
      <p class="list-item">
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
    flex-direction: row nowrap;
  }

  .list-index {
    grid-column: 1 / 3;
    align-self: start;
    justify-self: end;
    color: var(--color-dark);
    padding: 0 0 0 var(--gap-large);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-regular);
  }

  .list-item {
    grid-column: 3 / 7;
  }

  p {
    margin-block: 0;
    color: var(--color-dark);
    font-size: var(--font-size-regular);
    line-height: var(--line-height-large);
    padding-bottom: var(--gap-regular);
  }
</style>
