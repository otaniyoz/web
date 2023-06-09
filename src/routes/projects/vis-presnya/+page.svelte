<script lang="ts">
  import List from "$lib/components/List.svelte";
  import Factoid from "$lib/components/Factoid.svelte";
  import ImageGrid from "$lib/components/CardsGrid.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import Heading from "$lib/components/Heading.svelte";
</script>

<svelte:head>
  <title>Visualisation of sports sites in the Presnya</title>
</svelte:head>

<ImageGrid
  cardsMaps={[
    { image: "../../vis-presnya/11.png" },
    { video: "../../vis-presnya/icons-slideshow.mp4" },
  ]}
/>
<section class="page-section">
  <article>
    <Heading
      headingLevel={2}
      headingTitle="Visualisation of sports sites in the Presnya"
    />
    <Paragraph
      paragraphClass="grid-col14"
      paragraphContent="The Presnensky district, also commonly referred to as the Presnya, is one of the central districts in Moscow. It's known for its recreational locations such as Patriarshy ponds."
    />
    <Paragraph
      paragraphClass="grid-col14"
      paragraphContent="In 2022, I spent a couple of hours making an illustration of sports sites in the district and using public data identified around 64 sports sites:"
    />
    <img
      alt="Illustration of sports sites in the Presnya"
      class="grid-col14"
      src="../../vis-presnya/12.jpg"
    />
    <aside class="grid-col14">
      <Factoid factoidNumber="32" factoidDescription="sports halls & gyms" />
      <Factoid factoidNumber="17" factoidDescription="workout grounds" />
      <Factoid factoidNumber="11" factoidDescription="sports fields" />
      <Factoid factoidNumber="4" factoidDescription="gardens & parks" />
    </aside>
    <List
      listTitle="Approach"
      listDescription="I didn't want to use a map editor, so did most of the work from scratch:"
      showIndex={true}
      listRows={[
        "Downloaded data from OSM: due to the hard limit of 50k points per export, had to do it in batches and stitch all pieces together later;",
        "Parsed data: from each file selected unique data points with relevant tags;",
        "Plotted data: because of Python's matplotlib, had to code the Mercator projection to get an accurate representation of locations;",
        "Exported plots to Figma: combined different layers, improved visuals, and checked data by hand.",
      ]}
    />
  </article>
</section>

<style>
  aside {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: var(--gap-large);
    row-gap: var(--gap-small);
  }

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
