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
  <article class="narrative">
    <Heading level={1} useInline={false}>Pomes</Heading>
    <p>
      {typographString(
        "Sometimes I write poems, a term used here quite carelessly I should say, here are some of them, from latest to oldest:"
      )}
    </p>
  </article>
</SectionGrid>
{#if pomes}
  {#each pomes as pome}
    {#if pome.published === "true"}
      <SectionGrid>
        <article class="pome-body">
          <Heading level={2} useInline={false}>
            {typographString(pome.title)}</Heading
          >
          {#each pome.content as line}
            <p>{typographString(line)}</p>
          {/each}
          <p class="pome-date">{typographString(pome.date)}</p>
        </article>
      </SectionGrid>
    {/if}
  {/each}
{:else}
  <SectionGrid>
    <article class="narrative">
      <p>No poems</p>
    </article>
  </SectionGrid>
{/if}

<style>
  .narrative {
    grid-area: auto / 1 / auto / 7;
  }

  .pome-body {
    grid-area: auto / 2 / auto / 8;
    font-family: "IBM Plex Serif";
    padding-bottom: var(--gap-large);
  }

  .pome-date {
    font-family: "IBM Plex Sans";
    grid-area: auto / 2 / auto / 8;
    padding-bottom: var(--gap-xlarge);
  }

  @media screen and (max-width: 1220px) {
    .pome-body {
      grid-area: auto / 1 / auto / 7;
    }

    .pome-date {
      grid-area: auto / 1 / auto / 7;
    }
  }
</style>
