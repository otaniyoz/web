<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import CardsGrid from "$lib/components/CardsGrid.svelte";
  import typographString from "../../../utils/typographString";
</script>

<svelte:head>
  <title>DIY clothes and gear</title>
</svelte:head>

<section>
  <Heading classes="grid-col17" level={1}
    >{typographString("DIY clothes and gear")}</Heading
  >
  <p class="grid-col17">
    {typographString(
      "I try to patch and fix things, if I can't -- I try to repurpose them responsibly:"
    )}
  </p>
</section>
<section>
  <CardsGrid
    classes="grid-col-all orange-text"
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
</section>
