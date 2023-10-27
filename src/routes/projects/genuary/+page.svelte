<script lang="ts">
  import CardsGrid from "$lib/components/CardsGrid.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import typographString from "../../../utils/typographString";
</script>

<svelte:head>
  <title>Genuary submissions</title>
</svelte:head>

<SectionGrid>
  <Heading classes="grid-col17" level={1} useInline={false}>
    {typographString("Genuary submissions")}
  </Heading>
  <p class="grid-col17">
    {typographString(
      "Genuary is a month-long challenge in generative art. It takes place every year in January and requires participants to create an artwork on a given topic for every day of the month. Below are my attempts at the challenge."
    )}
  </p>
</SectionGrid>
<SectionGrid>
  <Heading classes="grid-col17" level={2} useInline={false}>2023</Heading>
  <CardsGrid
    classes="grid-col-all"
    cardsMaps={[
      { video: "../../genuary/20230101.mp4" },
      { image: "../../genuary/20230102.png" },
      { video: "../../genuary/20230103.mp4" },
      { video: "../../genuary/20230104.mp4" },
      { image: "../../genuary/20230105.png" },
      { image: "../../genuary/20230106.png" },
      { image: "../../genuary/20230107.png" },
      { video: "../../genuary/20230108.mp4" },
      { image: "../../genuary/20230109.png" },
      { video: "../../genuary/20230110.mp4" },
      { image: "../../genuary/20230111.png" },
      { image: "../../genuary/20230112.png" },
      { video: "../../genuary/20230113.mp4" },
      { image: "../../genuary/20230114.png" },
      { video: "../../genuary/20230115.mp4" },
      { image: "../../genuary/20230116.png" },
      { video: "../../genuary/20230117.mp4" },
      { video: "../../genuary/20230118.mp4" },
      { image: "../../genuary/20230119.png" },
      { image: "../../genuary/20230120.png" },
      { image: "../../genuary/20230121.png" },
      { video: "../../genuary/20230122.mp4" },
      { video: "../../genuary/20230123.mp4" },
      { image: "../../genuary/20230124.png" },
      { image: "../../genuary/20230125.png" },
      { image: "../../genuary/20230126.png" },
      { video: "../../genuary/20230127.mp4" },
      { video: "../../genuary/20230128.mp4" },
      { image: "../../genuary/20230129.png" },
      { video: "../../genuary/20230130.mp4" },
      { video: "../../genuary/20230131.mp4" },
    ]}
  />
</SectionGrid>
