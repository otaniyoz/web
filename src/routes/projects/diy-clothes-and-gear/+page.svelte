<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import CardsGrid from "$lib/components/CardsGrid.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
</script>

<svelte:head>
  <title>DIY clothing</title>
</svelte:head>

<SectionGrid>
  <div class="section-title" slot="title">
    <Heading headingTitle="DIY clothes and gear" headingLevel={2} />
  </div>
  <div class="section-body" slot="body">
    <Paragraph
      paragraphContent="I try to patch and fix things if I can, and when I can't -- I try to repurpose them responsibly. Here are some examples:"
    />
  </div>
</SectionGrid>
<SectionGrid>
  <article slot="body">
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
  .section-title,
  .section-body {
    grid-area: auto / 1 / auto / 7;
  }

  article {
    grid-area: auto / 1 / auto / -1;
  }
</style>
