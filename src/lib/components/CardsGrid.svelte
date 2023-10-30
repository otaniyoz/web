<script lang="ts">
  import typographString from "../../utils/typographString";
  import type { CardMapType } from "$lib/types";

  export let cardsMaps: CardMapType[];
  export let classes: string = "";
</script>

<figure class="cards-grid {classes}">
  {#each cardsMaps as cardMap}
    <div class="card">
      {#if cardMap.image && cardMap.image.length}
        <img alt="Card cover" src={cardMap.image} class="card-media" />
      {:else if cardMap.video && cardMap.video.length}
        <video class="card-media" muted autoplay loop
          ><source src={cardMap.video} type="video/mp4" /></video
        >
      {/if}
      {#if cardMap.title}
        <div class="card-info-container">
          {#if cardMap.link && cardMap.link.length}
            <p class="card-title"><a href={cardMap.link}>{cardMap.title}</a></p>
          {:else if cardMap.title && cardMap.title.length}
            <p class="card-title">{cardMap.title}</p>
          {/if}
          {#if cardMap.description && cardMap.description.length}
            <p class="card-description">
              {typographString(cardMap.description)}
            </p>
          {/if}
        </div>
      {/if}
    </div>
  {/each}
</figure>

<style>
  p {
    color: inherit;
  }

  .card-description {
    line-height: var(--line-height-small);
  }

  .card-title {
    font-weight: inherit;
    line-height: var(--line-height-small);
    font-size: var(--font-size-medium);
    padding-bottom: var(--gap-regular);
    margin-left: -0.5vmin; /* to aligh horizontaly. */
  }

  .card:nth-child(7n + 1) > .card-info-container > .card-title {
    font-size: var(--font-size-xlarge);
    margin-left: -1vw; /* to aligh horizontaly. */
  }

  .card {
    margin: 0;
    padding: 0;
    display: grid;
    align-items: end;
    justify-items: start;
    aspect-ratio: 1 / 1;
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

  .cards-grid {
    display: grid;
    gap: var(--gap-small);
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    .cards-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
