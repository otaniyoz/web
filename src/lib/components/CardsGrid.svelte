<script lang="ts">
  import type { CardMapType } from "$lib/types";

  export let cardsMaps: CardMapType[];
</script>

<div class="cards-grid">
  {#each cardsMaps as cardMap}
    <article class="card">
      {#if cardMap.image && cardMap.image.length}
        <img alt="Card cover" src={cardMap.image} class="card-media" />
      {:else if cardMap.video && cardMap.video.length}
        <video class="card-media" muted autoplay loop
          ><source src={cardMap.video} type="video/mp4" /></video
        >
      {/if}
      {#if cardMap.link && cardMap.title}
        <div class="card-info-container">
          {#if cardMap.title.length && cardMap.link.length}
            <p class="accent"><a href={cardMap.link}>{cardMap.title}</a></p>
          {/if}
          {#if cardMap.description && cardMap.description.length}
            <p>{cardMap.description}</p>
          {/if}
        </div>
      {/if}
    </article>
  {/each}
</div>

<style>
  p {
    hyphens: auto;
  }

  .card {
    padding: 0;
    display: grid;
    aspect-ratio: 1 / 1;
    color: var(--color-dark);
    align-items: end;
    justify-items: start;
  }

  .card > * {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .card:nth-child(7n + 1) {
    grid-row: span 2;
    grid-column: span 2;
  }

  .card-media {
    height: 100%;
    aspect-ratio: 1 / 1;
  }

  .card-info-container {
    background-color: var(--color-light);
    width: 100%;
  }

  .cards-grid {
    display: grid;
    gap: var(--gap-small);
    grid-template-columns: repeat(2, 1fr);
    grid-area: auto / 1 / auto / 5;
  }

  @media screen and (min-width: 1200px) {
    .cards-grid {
      grid-template-columns: repeat(4, 1fr);
      grid-area: auto / 1 / auto / 8;
    }
  }
</style>
