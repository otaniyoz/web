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
    color: var(--color-dark);
    position: sticky;
    letter-spacing: -0.05em;
    word-spacing: -0.1em;
    line-height: var(--line-height-small);
    font-weight: var(--font-weight-heavy);
    font-size: var(--font-size-large);
    padding: 0;
    margin-block: 0;
  }

  h2 {
    color: var(--color-dark);
    line-height: var(--line-height-regular);
    font-weight: var(--font-weight-heavy);
    font-size: var(--font-size-medium);
    margin: 0;
    margin-block: 0;
    padding: 0;
  }

  h3 {
    color: var(--color-dark);
    font-weight: var(--font-weight-heavy);
    font-size: var(--font-size-regular);
    line-height: var(--line-height-large);
    margin-block: 0;
  }

  @media screen and (min-width: 1200px) {
    h1 {
      font-size: clamp(6rem, 11.5vw + 1rem, 8rem);
    }
    h2,
    h3 {
      grid-area: auto / 1 / auto / 3;
      hyphens: auto;
    }
    h3 {
      padding-top: var(--gap-large);
    }
  }

  @media screen and (max-width: 1200px) {
    h2,
    h3 {
      padding-top: var(--gap-large);
      grid-area: auto/ 1 / auto / 5;
    }
  }
</style>
