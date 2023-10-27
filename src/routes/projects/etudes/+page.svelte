<script lang="ts">
  import List from "$lib/components/List.svelte";
  import Link from "$lib/components/Link.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import CardsGrid from "$lib/components/CardsGrid.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
  import typographString from "../../../utils/typographString";
</script>

<svelte:head>
  <title>Etudes in code</title>
</svelte:head>

<SectionGrid>
  <article class="narrative">
    <Heading level={1} useInline={false} sub={true}>
      {typographString("Etudes in code")}
      <Link
        slot="one"
        classes="regular-weight regular-size large-line-height"
        href="https://t.me/etudesincode"
        outside={true}>See GIFs on Telegram</Link
      >
      <Link
        slot="two"
        classes="regular-weight regular-size large-line-height"
        href="https://github.com/otaniyoz/etudes"
        outside={true}>See code on Github</Link
      >
    </Heading>
    <p>
      {typographString(
        "Etudes are small pieces of code with minimal dependecies that create self-contained creative animations:"
      )}
    </p>
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
        {
          video: "../../etudes/20230904.mp4",
        },
        {
          video: "../../etudes/20230908.mp4",
        },
      ]}
    />
  </article>
</SectionGrid>
<SectionGrid>
  <article class="narrative">
    <List
      listRows={[
        "code should be short and moderately optimized",
        "use of dependecies and off-the-shelf solutions should be minimal",
        "final result should be a sequence of frames that doesn't require additional creative processing",
        "it shouldn't last more than five seconds and weigh more than a few mbs",
      ]}
    >
      <p slot="description">
        {typographString(
          "There are no strict rules to etudes, but here are some guidelines:"
        )}
      </p>
    </List>
    <p>
      {typographString(
        "Etudes are different from code golfing: they should not optimise for shorter code-length at the cost of clarity and performance. They are also different from creative coding: etudes should try to maintain a healthy balance between code quality & performance and artistic vision."
      )}
    </p>
    <p>
      {typographString(
        "I think, with these loose constraints, etudes are a healthier and a more enjoyable alternative to coding exercises and interview questions."
      )}
    </p>
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
