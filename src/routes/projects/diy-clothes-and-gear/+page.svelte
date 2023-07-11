<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import CardsGrid from "$lib/components/CardsGrid.svelte";
</script>

<svelte:head>
  <title>DIY clothing</title>
</svelte:head>

<section>
  <article>
    <Heading headingTitle="DIY clothes and gear" headingLevel={2} />
    <Paragraph
      paragraphContent="I try to patch and fix things if I can, and when I can't -- I try to repurpose them responsibly. Here are some examples:"
    />
  </article>
</section>
<section>
  <article id="cards-grid">
    <CardsGrid
      cardsMaps={[
        {
          title: "Pullover",
          description: "handmade from a fleece blanket",
          image: "../../diy-clothes-and-gear/pullover.jpg",
        },
        {
          title: "Bucket hat",
          description: "handmade from a shirt",
          image: "../../diy-clothes-and-gear/hat.jpg",
        },
        {
          title: "Tool pouch",
          description: "handmade from a zip sweater",
          image: "../../diy-clothes-and-gear/pouch.jpg",
        },
      ]}
    />
  </article>
</section>

<style>
  article {
    display: grid;
    gap: var(--gap-small);
    row-gap: var(--gap-regular);
    grid-area: auto / 1 / auto / 7;
  }

  #cards-grid {
    grid-area: auto / 1 / auto / -1;
  }
</style>
