<script lang="ts">
  import { page } from "$app/stores";
  import Heading from "$lib/components/Heading.svelte";
  import typographString from "../../../utils/typographString";
  import type { NoteContentType } from "$lib/types";

  export let data: NoteContentType;
</script>

<svelte:head>
  <title>{$page.data.post.title}</title>
</svelte:head>

{#if data.post}
  <section>
    <Heading classes="grid-col17" level={1}>{typographString(data.post.title)}</Heading>
    {#each data.post.content as paragraph}
      <p class="grid-col17 serif font-normal font-kern font-no-ligs">{typographString(paragraph)}</p>
    {/each}
  </section>
{/if}