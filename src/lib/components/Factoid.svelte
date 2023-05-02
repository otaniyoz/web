<script lang="ts">
  import typographString from "../../utils/typographString";

  export let factoidNumber: string;
  export let factoidDescription: string | undefined;

  factoidNumber = typographString(factoidNumber);
  if (factoidDescription && factoidDescription.length) {
    factoidDescription = typographString(factoidDescription);
  }
</script>

<article>
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
    font-size: var(--font-size-large);
  }
</style>
