<script lang="ts">
  export const csr = true;
  export let images: string[];
  export let alts: string[];
  $: selectedImageIndex = 0;
</script>

<article>
  <div id="selected-image">
    <img src={images[selectedImageIndex]} alt={alts[selectedImageIndex]} />
  </div>
  <aside>
    {#each images as image, idx}
      <div
        class="image-wrapper"
        on:pointerdown={() => {
          selectedImageIndex = idx;
        }}
      >
        <img src={image} alt={alts[idx]} />
      </div>
    {/each}
  </aside>
</article>

<style>
  article {
    display: flex;
    height: minmax(160px, 640px);
    gap: var(--gap-regular);
    flex-flow: column nowrap;
    grid-area: auto / 1 / auto / 5;
    padding-bottom: var(--gap-large);
  }

  aside {
    display: grid;
    gap: var(--gap-small);
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(40px, 80px));
  }

  .image-wrapper:hover {
    outline: 1px solid var(--color-orange);
  }

  #selected-image {
    height: 48vmax;
  }

  #selected-image > img {
    object-fit: contain;
  }
</style>
