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
  <p class="factoid-number">
    {factoidNumber}
  </p>
  {#if factoidDescription}
    <p>{factoidDescription}</p>
  {/if}
</article>

<style>
  .factoid-number {
    line-height: var(--line-height-small);
    font-weight: var(--font-weight-heavy);
    font-size: var(--font-size-xlarge);
    margin-left: -1vmin; /* to aligh horizontaly. */
  }

  p {
    color: inherit;
  }
</style>
