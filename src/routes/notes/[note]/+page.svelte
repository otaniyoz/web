<script lang="ts">
  import { page } from "$app/stores";
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import type { NoteContentType } from "$lib/types";

  export let data: NoteContentType;
</script>

<svelte:head>
  <title>
    {$page.data.post.title}
  </title>
</svelte:head>

{#if data.post}
  <section>
    <div id="heading-wrapper">
      <Heading headingTitle={data.post.title} headingLevel={2} />
    </div>
    <article>
      {#each data.post.content as paragraph}
        <Paragraph paragraphContent={paragraph} />
      {/each}
    </article>
  </section>
{/if}

<style>
  article {
    display: grid;
    font-family: serif;
    row-gap: var(--gap-regular);
    padding-bottom: var(--gap-large);
    grid-area: auto / 1 / auto / 9;
  }

  #heading-wrapper {
    grid-area: 1 / 1 / auto / 9;
  }

  @media screen and (min-width: 1200px) {
    article {
      grid-area: 1 / 4 / auto / 9;
    }

    #heading-wrapper {
      grid-area: 1 / 1 / auto / 4;
    }
  }
</style>
