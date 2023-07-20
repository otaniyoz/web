<script lang="ts">
  import { page } from "$app/stores";
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
  import type { NoteContentType } from "$lib/types";

  export let data: NoteContentType;
</script>

<svelte:head>
  <title>
    {$page.data.post.title}
  </title>
</svelte:head>

{#if data.post}
  <SectionGrid>
    <div class="heading-wrapper">
      <Heading title={data.post.title} level={1} />
    </div>
    <article class="narrative">
      {#each data.post.content as paragraph}
        <Paragraph paragraphContent={paragraph} />
      {/each}
    </article>
  </SectionGrid>
{/if}

<style>
  .narrative {
    font-family: serif;
    padding-bottom: var(--gap-large);
    grid-area: auto / 1 / auto / 7;
  }

  .heading-wrapper {
    grid-area: 1 / 1 / auto / 7;
  }
</style>
