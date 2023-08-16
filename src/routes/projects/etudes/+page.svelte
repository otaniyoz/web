<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import CardsGrid from "$lib/components/CardsGrid.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
</script>

<svelte:head>
  <title>Etudes in code</title>
</svelte:head>

<SectionGrid>
  <article class="narrative">
    <Heading
      title="Etudes in code"
      level={1}
      useInline={false}
      noteTitle={["See GIFs on Telegram", "See code on Github"]}
      noteLink={["https://t.me/etudesincode", "https://github.com/otaniyoz/etudes"]}
    />
    <Paragraph
      paragraphContent="Etudes are small pieces of code I write sometimes. Here are some of them:"
    />
  </article>
  <article class="visual">
    <CardsGrid
      cardsMaps={[
        {
          video: "../../etudes/07222023.mp4",
        },
        {
          video: "../../etudes/03042023.mp4",
        },
        {
          video: "../../etudes/03072023.mp4",
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
