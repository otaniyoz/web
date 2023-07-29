<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import CardsGrid from "$lib/components/CardsGrid.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
</script>

<svelte:head>
  <title>DIY clothes and gear</title>
</svelte:head>

<SectionGrid>
  <article class="narrative">
    <Heading title="DIY clothes and gear" level={1} />
    <Paragraph
      paragraphContent="I try to patch and fix things if I can, and when I can't -- I try to repurpose them responsibly. Here are some examples:"
    />
  </article>
  <article class="visual">
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
</SectionGrid>

<style>
  .narrative {
    grid-area: auto / 1 / auto / 7;
  }

  .visual {
    grid-area: auto / 1 / auto / -1;
  }
</style>
