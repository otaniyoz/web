<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import { page } from "$app/stores";
</script>

<svelte:head><title>{$page.status}</title></svelte:head>

<Heading level={1}>{$page.status}</Heading>
{#if $page.status === 404 && $page.error.message}
  <p class="grid-col17">{$page.error.message}</p>
{/if}