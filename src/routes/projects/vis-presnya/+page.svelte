<script lang="ts">
  import List from "$lib/components/List.svelte";
  import Factoid from "$lib/components/Factoid.svelte";
  import CardsGrid from "$lib/components/CardsGrid.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import typographString from "../../../utils/typographString";
</script>

<svelte:head>
  <title>Visualisation of sports sites in the Presnya</title>
</svelte:head>

<section>
  <CardsGrid
    classes="grid-col-all"
    cardsMaps={[
      { image: "../../vis-presnya/11.png" },
      { video: "../../vis-presnya/icons-slideshow.mp4" },
    ]}
  />
  <Heading classes="grid-col17" level={1}>
    {typographString("Visualisation of sports sites in the Presnya")}
  </Heading>
  <p class="grid-col17">
    {typographString(
      "The Presnensky district, also commonly referred to as the Presnya, is one of the central districts in Moscow. It's known for its recreational locations such as Patriarshy ponds."
    )}
  </p>
  <p class="grid-col17">
    {typographString(
      "In 2022, I spent a couple of hours making an illustration of sports sites in the district and using public data identified around 64 sports sites:"
    )}
  </p>
  <figure class="centered-visual">
    <img
      alt="Illustration of sports sites in the Presnya"
      src="../../vis-presnya/12.jpg"
    />
  </figure>
  <article class="centered-visual grid large-gap four-columns">
    <Factoid factoidNumber="32" factoidDescription="sports halls & gyms" />
    <Factoid factoidNumber="17" factoidDescription="workout grounds" />
    <Factoid factoidNumber="11" factoidDescription="sports fields" />
    <Factoid factoidNumber="4" factoidDescription="gardens & parks" />
  </article>
  <List
    classes="grid-col17"
    showIndex={true}
    listRows={[
      "Downloaded data from OSM: due to the hard limit of 50k points per export, had to do it in batches and stitch all pieces together later;",
      "Parsed data: from each file selected unique data points with relevant tags;",
      "Plotted data: because of Python's matplotlib, had to code the Mercator projection to get an accurate representation of locations;",
      "Exported plots to Figma: combined different layers, improved visuals, and checked data by hand.",
    ]}
  >
    <Heading slot="title" level={2}>Approach</Heading>
    <p slot="description">
      {typographString(
        "I didn't want to use a map editor, so did most of the work from scratch:"
      )}
    </p>
  </List>
</section>
