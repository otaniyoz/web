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
      noteTitle={["See GIFs on Telegram"]}
      noteLink={["https://t.me/etudesincode"]}
    />
    <Paragraph
      paragraphContent="Etudes are small pieces of code I write as a coding practice. Here are some examples:"
    />
  </article>
</SectionGrid>
<SectionGrid>
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
        {
          video: "../../etudes/07052023.mp4",
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
