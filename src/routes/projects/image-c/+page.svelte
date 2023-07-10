<script lang="ts">
  import Paragraph from "$lib/components/Paragraph.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import List from "$lib/components/List.svelte";
</script>

<svelte:head>
  <title>Image processing library in C</title>
</svelte:head>

<section class="page-section">
  <article>
    <Heading headingLevel={2} headingTitle="Image proccessing library in C" />

    <Paragraph
      paragraphContent="This is a personal collection of image processing tools written in C. It is built on top of pjreddie's uwimg homework assignments."
    />
    <List
      listTitle=""
      listDescription="It includes low-level pixel manipulations along with higher level postprocessing algorithms such as:"
      listRows={[
        "Extended and flow-based differences of gaussians;",
        "Otsu's thresholding;",
        "Pixel sorting;",
        "and more.",
      ]}
    />
    <Paragraph
      paragraphContent="But don't use it, okay: https://github.com/otaniyoz/celp"
    />
  </article>
</section>

<style>
  article {
    display: grid;
    row-gap: var(--gap-regular);
    grid-area: auto / 1 / auto / 5;
  }

  @media screen and (min-width: 1200px) {
    article {
      grid-area: 1 / 1 / auto / 5;
    }
  }
</style>
