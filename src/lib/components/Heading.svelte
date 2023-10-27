<script lang="ts">
  export let level: number;
  export let classes: string = "";
  export let sub: boolean = false;
  export let useInline: boolean = true;
</script>

<div class="heading-container {classes}">
  {#if level === 1}
    <h1 class="large-text"><slot /></h1>
  {:else if level === 2}
    <h2><slot /></h2>
  {:else if level === 3}
    <h3><slot /></h3>
  {/if}
  {#if sub}
    <div class="sub-container" class:inline={useInline}>
      <slot name="one" />
      <slot name="two" />
      <slot name="three" />
    </div>
  {/if}
</div>

<style>
  h1 {
    padding: 0;
    margin-block: 0;
    word-spacing: -0.05em;
    margin-left: -0.2vmax;
    letter-spacing: -0.025em;
    color: var(--color-dark);
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
  h1,
  h2,
  h3 {
    width: 100%;
    font-family: "IBM Plex Sans";
  }
  .inline {
    display: inline-flex !important;
    margin-left: -0.95vmax;
  }
  .sub-container {
    display: flex;
    flex-flow: row nowrap;
    gap: var(--gap-regular);
    vertical-align: top;
    margin-left: 0.2vmax;
  }
  .heading-container {
    hyphens: auto;
    padding-bottom: var(--gap-xlarge);
  }
  @media screen and (min-width: 1200px) {
    h1 {
      margin-left: -0.35vmax;
    }
  }
</style>
