<script lang="ts">
  import typographString from "../../utils/typographString";

  export let classes = "";
  export let factoidNumber: string;
  export let factoidDescription: string | undefined;

  factoidNumber = typographString(factoidNumber);
  if (factoidDescription && factoidDescription.length) {
    factoidDescription = typographString(factoidDescription);
  }
</script>

<article class={classes}>
  <p class="factoid-number sans-serif">
    {factoidNumber}
  </p>
  {#if factoidDescription}
    <p class='sans-serif'>{factoidDescription}</p>
  {/if}
</article>

<style>
  .factoid-number {
    line-height: var(--line-height-small);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-xlarge);
    margin-left: -1.8vmin; /* to aligh horizontaly. */
  }
</style>
