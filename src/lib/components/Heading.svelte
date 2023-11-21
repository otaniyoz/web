<script lang="ts">
  export let level: number;
  export let classes: string = "";
  export let useInline: boolean = true;
</script>

<div class="heading-container {classes}">
  {#if level === 1}
    <h1 class="large-size xregular-line-height font-norm font-kern font-no-ligs"><slot /></h1>
  {:else if level === 2}
    <h2 class="medium-size regular-line-height font-norm font-kern font-no-ligs"><slot /></h2>
  {:else if level === 3}
    <h3 class="regular-size large-line-height font-norm font-kern font-no-ligs"><slot /></h3>
  {/if}
  {#if $$slots.subtitles}
    <slot name="subtitles" class="sub-container {(useInline)?'inline':''}">
    </slot>
  {/if}
</div>

<style>
  h1 {
    padding: 0;
    word-spacing: -0.05em;
    margin-left: -0.4vmax;
    letter-spacing: -0.025em;
  }
  h2 {
    margin: 0;
    padding: 0;
    margin-left: -0.2vmax;
  }
  h1,
  h2,
  h3 {
    width: 100%;
    color: inherit;
    margin-block: 0;
    font-weight: inherit;
    font-family: "IBM Plex Sans";
    padding-top: var(--gap-large);
  }
  .inline {
    display: inline-flex !important;
    margin-left: -0.95vmax;
  }
  .sub-container {
    display: flex;
    flex-flow: row nowrap;
    gap: var(--gap-regular);
    margin-left: 0.2vmax;
  }
  .heading-container {
    hyphens: auto;
    padding-bottom: var(--gap-xlarge);
  }
  @media screen and (min-width: 1200px) {
    h1 {
      margin-left: -0.6vmax;
    }
    h2 {
      margin-left: -0.3vmax;
    }
  }
</style>
