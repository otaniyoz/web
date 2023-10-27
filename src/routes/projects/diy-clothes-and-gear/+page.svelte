<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import CardsGrid from "$lib/components/CardsGrid.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
  import typographString from "../../../utils/typographString";
</script>

<svelte:head>
  <title>DIY clothes and gear</title>
</svelte:head>

<SectionGrid>
  <article class="narrative">
    <Heading level={1}>{typographString("DIY clothes and gear")}</Heading>
    <p>
      {typographString("I try to patch and fix things, if I can't -- I try to repurpose them responsibly:")}
    </p>
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
