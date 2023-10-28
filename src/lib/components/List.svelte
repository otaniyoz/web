<script lang="ts">
  import typographString from "../../utils/typographString";

  export let listRows: string[];
  export let classes: string = "";
  export let showIndex: boolean = false;

  for (let i = 0; i < listRows.length; i++) {
    listRows[i] = typographString(listRows[i]);
  }
</script>

<figure class={classes}>
  <slot name="title" />
  <slot name="description" />
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
</figure>

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
