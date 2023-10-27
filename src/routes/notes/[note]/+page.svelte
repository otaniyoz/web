<script lang="ts">
  import { page } from "$app/stores";
  import Heading from "$lib/components/Heading.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
  import typographString from "../../../utils/typographString";
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
    <article class="narrative">
      <Heading level={1}>{typographString(data.post.title)}</Heading>
      {#each data.post.content as paragraph}
        <p>{typographString(paragraph)}</p>
      {/each}
    </article>
  </SectionGrid>
{/if}

<style>
  .narrative {
    font-family: "IBM Plex Serif";
    padding-bottom: var(--gap-large);
    grid-area: auto / 1 / auto / 7;
  }
</style>
