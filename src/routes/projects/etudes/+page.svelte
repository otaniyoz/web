<script lang="ts">
  import List from "$lib/components/List.svelte";
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
      paragraphContent="Etudes are small pieces of code with minimal dependecies that create self-contained creative animations:"
    />
  </article>
  <article class="visual">
    <CardsGrid
      cardsMaps={[
        {
          video: "../../etudes/20230824.mp4",
        },
        {
          video: "../../etudes/20230304.mp4",
        },
        {
          video: "../../etudes/20230818.mp4",
        },
      ]}
    />
  </article>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <List
      listDescription="There are no strict rules to etudes, but here are some guidelines:"
      listRows={[
        "code should be short and moderately optimized",
        "use of dependecies and off-the-shelf solutions should be minimal",
        "final result should be a sequence of frames that doesn't require additional creative processing",
        "it shouldn't last more than five seconds and weigh more than a few mbs",
      ]}
    />
    <Paragraph paragraphContent="Right now, I mostly use Python's matplotlib, numpy, and scipy to draw frames."/>
  </article>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <Paragraph paragraphContent="Etudes are different from code golfing: they should not optimise for shorter code-length at the cost of clarity and performance. They are also different from creative coding: etudes should try to maintain a healthy balance between code quality & performance and artistic vision."/>
    <Paragraph paragraphContent="I think, with these loose constraints, etudes are a healthier and a more enjoyable alternative to coding exercises and interview questions."/>
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
