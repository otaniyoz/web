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
      {#if showIndex}<p class="list-index">{rowIndex + 1}.</p>{/if}
      <p>{row}</p>
    </div>
  {/each}
</figure>

<style>
  .row {
    display: flex;
    flex-flow: row nowrap;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: calc(1 * 8 * 100% / 6 / 8);
  }
  .list-index {
    padding-right: var(--gap-small);
  }
  @media screen and (max-width: 1200px) {
    .row {
      padding-left: calc(1 * 100% / 6);
    }
  }
</style>
