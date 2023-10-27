<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
  import typographString from "../../../utils/typographString";
  import pomes from "../../../data/pomes.json";
</script>

<svelte:head>
  <title>Pomes</title>
</svelte:head>

<SectionGrid>
  <Heading classes="grid-col17" level={1} useInline={false}>Pomes</Heading>
  <p class="grid-col17">
    {typographString(
      "Sometimes I write poems, a term used here quite carelessly I should say, here are some of them, from latest to oldest:"
    )}
  </p>
</SectionGrid>
{#if pomes}
  {#each pomes as pome}
    {#if pome.published === "true"}
      <SectionGrid>
        <Heading classes="centered-visual" level={2} useInline={false}>
          {typographString(pome.title)}</Heading
        >
        {#each pome.content as line}
          <p class="centered-visual serif">{typographString(line)}</p>
        {/each}
        <p class="large-bottom-padding regular-top-padding centered-visual">
          {typographString(pome.date)}
        </p>
      </SectionGrid>
    {/if}
  {/each}
{:else}
  <SectionGrid>
    <p class="grid-col17">No poems</p>
  </SectionGrid>
{/if}