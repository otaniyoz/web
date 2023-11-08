<script lang="ts">
  import { page } from "$app/stores";
  import Heading from "$lib/components/Heading.svelte";
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
  <section>
    <Heading classes="centered-visual" level={2} useInline={false}>
      {typographString(data.post.title)}</Heading
    >
    {#each data.post.content as line}
      <p class="centered-visual serif">{typographString(line)}</p>
    {/each}
    <p class="large-bottom-padding regular-top-padding centered-visual">
      {typographString(data.post.date)}
    </p>
  </section>
{/if}
