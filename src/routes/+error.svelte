<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import { page } from "$app/stores";
</script>

<svelte:head><title>{$page.status}</title></svelte:head>

<Heading level={1}>{$page.status}</Heading>
{#if $page.status === 404}
  <p class="grid-col17">The page you want doesn't exist</p>
{/if}