<script lang="ts">
  import typographString from "../../utils/typographString";

  export let level: number;
  export let title: string;
  export let noteTitle: string[] = [""];
  export let noteLink: string[] = [""];
  export let useInline: boolean = true;

  title = typographString(title);
  for (let i = 0; i < noteTitle.length; i++) {
    noteTitle[i] = typographString(noteTitle[i]);
  }
</script>

<div class="heading-wrapper">
  {#if title.length && level === 1}
    <h1>
      {title}
      {#if noteTitle[0].length}
        <div class="heading-links-container" class:inline={useInline}>
          {#each noteTitle as _, idx}
            <p>
              {#if noteLink[idx].length}
                <a href={noteLink[idx]} target="_blank">{noteTitle[idx]}</a>
              {:else}
                {noteTitle[idx]}
              {/if}
            </p>
          {/each}
        </div>
      {/if}
    </h1>
  {:else if title.length && level === 2}
    <h2>
      {title}
      {#if noteTitle[0].length}
        <div class="heading-links-container" class:inline={useInline}>
          {#each noteTitle as _, idx}
            <p>
              {#if noteLink[idx].length}
                <a href={noteLink[idx]} target="_blank">{noteTitle[idx]}</a>
              {:else}
                {noteTitle[idx]}
              {/if}
            </p>
          {/each}
        </div>
      {/if}
    </h2>
  {:else if title.length && level === 3}
    <h3>
      {title}
      {#if noteTitle[0].length}
        <div class="heading-links-container" class:inline={useInline}>
          {#each noteTitle as _, idx}
            <p>
              {#if noteLink[idx].length}
                <a href={noteLink[idx]} target="_blank">{noteTitle[idx]}</a>
              {:else}
                {noteTitle[idx]}
              {/if}
            </p>
          {/each}
        </div>
      {/if}
    </h3>
  {/if}
</div>

<style>
  p {
    margin-block: 0;
    margin-left: 0.35vmax;
    word-spacing: normal;
    letter-spacing: normal;
    color: var(--color-dark);
    font-size: var(--font-size-regular);
    line-height: var(--line-height-large);
    padding-bottom: var(--gap-regular);
    font-family: "IBM Plex Sans";
    font-weight: var(--font-weight-regular);
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
  .heading-wrapper {
    width: 100%;
  }
  .heading-links-container {
    display: flex;
    flex-flow: row nowrap;
    gap: var(--gap-small);
    vertical-align: top;
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
