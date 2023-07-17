<script lang="ts">
  import typographString from "../../utils/typographString";

  export let headingTitle: string;
  export let headingLevel: number;

  headingTitle = typographString(headingTitle);
</script>

{#if headingTitle.length}
  {#if headingLevel === 1}
    <h1>{headingTitle}</h1>
  {:else if headingLevel === 2}
    <h2>{headingTitle}</h2>
  {:else if headingLevel === 3}
    <h3>{headingTitle}</h3>
  {/if}
{/if}

<style>
  h1 {
    padding: 0;
    margin-block: 0;
    word-spacing: -0.05em;
    margin-left: -0.5vmin;
    letter-spacing: -0.025em;
    color: var(--color-dark);
    line-height: var(--line-height-regular);
    font-weight: var(--font-weight-heavy);
    font-size: var(--font-size-large);
  }

  h2 {
    margin: 0;
    padding: 0;
    margin-block: 0;
    color: var(--color-dark);
    line-height: var(--line-height-regular);
    font-weight: var(--font-weight-heavy);
    font-size: var(--font-size-medium);
  }

  h3 {
    margin-block: 0;
    color: var(--color-dark);
    font-weight: var(--font-weight-heavy);
    font-size: var(--font-size-regular);
    line-height: var(--line-height-large);
  }

  @media screen and (min-width: 1200px) {
    h1,
    h2,
    h3 {
      hyphens: auto;
      padding-bottom: var(--gap-xlarge);
    }
    h3 {
      padding-top: var(--gap-large);
    }
  }

  @media screen and (max-width: 1200px) {
    h1,
    h2,
    h3 {
      padding-bottom: var(--gap-xlarge);
    }
  }
</style>
