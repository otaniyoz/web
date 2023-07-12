<script lang="ts">
  import List from "$lib/components/List.svelte";
  import Factoid from "$lib/components/Factoid.svelte";
  import ImageGrid from "$lib/components/CardsGrid.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
</script>

<svelte:head>
  <title>Visualisation of sports sites in the Presnya</title>
</svelte:head>

<figure>
  <ImageGrid
    cardsMaps={[
      { image: "../../vis-presnya/11.png" },
      { video: "../../vis-presnya/icons-slideshow.mp4" },
    ]}
  />
</figure>
<SectionGrid>
  <article class="narrative">
    <Heading
      headingLevel={2}
      headingTitle="Visualisation of sports sites in the Presnya"
    />
    <Paragraph
      paragraphContent="The Presnensky district, also commonly referred to as the Presnya, is one of the central districts in Moscow. It's known for its recreational locations such as Patriarshy ponds."
    />
    <Paragraph
      paragraphContent="In 2022, I spent a couple of hours making an illustration of sports sites in the district and using public data identified around 64 sports sites:"
    />
  </article>
</SectionGrid>
<figure>
  <img
    alt="Illustration of sports sites in the Presnya"
    src="../../vis-presnya/12.jpg"
  />
  <aside class="grid-container four-columns">
    <Factoid factoidNumber="32" factoidDescription="sports halls & gyms" />
    <Factoid factoidNumber="17" factoidDescription="workout grounds" />
    <Factoid factoidNumber="11" factoidDescription="sports fields" />
    <Factoid factoidNumber="4" factoidDescription="gardens & parks" />
  </aside>
</figure>
<SectionGrid>
  <article class="narrative">
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
</SectionGrid>

<style>
  .grid-container {
    display: grid;
    gap: var(--gap-large);
  }

  .four-columns {
    grid-template-columns: repeat(4, 1fr);
  }

  .narrative {
    grid-area: auto / 1 / auto / 7;
  }

  figure {
    margin: 0;
    padding-bottom: var(--gap-xlarge);
  }
</style>
