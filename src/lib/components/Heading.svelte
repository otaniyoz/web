<script lang="ts">
  import typographString from "../../utils/typographString";

  export let level: number;
  export let title: string;
  export let noteTitle: string = "";
  export let noteLink: string = "";
  export let useInline: boolean = true;

  title = typographString(title);
  noteTitle = typographString(noteTitle);
</script>

<div class="heading-wrapper">
  {#if title.length && level === 1}
    <h1>
      {title}
      {#if noteTitle.length}
        <p class:inline={useInline}>
          {#if noteLink.length}
            <a href={noteLink} target="_blank">{noteTitle}</a>
          {:else}
            {noteTitle}
          {/if}
        </p>
      {/if}
    </h1>
  {:else if title.length && level === 2}
    <h2>
      {title}
      {#if noteTitle.length}
        <p class:inline={useInline}>
          {#if noteLink.length}
            <a href={noteLink} target="_blank">{noteTitle}</a>
          {:else}
            {noteTitle}
          {/if}
        </p>
      {/if}
    </h2>
  {:else if title.length && level === 3}
    <h3>
      {title}
      {#if noteTitle.length}
        <p class:inline={useInline}>
          {#if noteLink.length}
            <a href={noteLink} target="_blank">{noteTitle}</a>
          {:else}
            {noteTitle}
          {/if}
        </p>
      {/if}
    </h3>
  {/if}
</div>

<style>
  p {
    margin-block: 0;
    margin-left: 0.35vmax;
    vertical-align: top;
    word-spacing: normal;
    letter-spacing: normal;
    color: var(--color-dark);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-large);
    padding-bottom: var(--gap-regular);
  }
  h1 {
    padding: 0;
    margin-block: 0;
    word-spacing: -0.05em;
    margin-left: -0.2vmax;
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
  .inline {
    display: inline;
    margin-left: -0.95vmax;
  }
  .heading-wrapper {
    display: inline-flex;
    flex-flow: row nowrap;
  }

  @media screen and (min-width: 1200px) {
    h1,
    h2,
    h3 {
      hyphens: auto;
      padding-bottom: var(--gap-xlarge);
    }
    h1 {
      margin-left: -0.35vmax;
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
