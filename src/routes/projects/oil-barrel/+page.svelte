<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import typographString from "../../../utils/typographString";
</script>

<svelte:head>
  <title>Concept landing page for a barrel of oil</title>
</svelte:head>

<section>
  <Heading classes="grid-col17" level={1} useInline={false}>
    {typographString("Landing page for a barrel of oil")}
  </Heading>
  <p class="grid-col17">
    {typographString(
      "This is a concept landing page for a barrel of oil, an exercise in design. Originally made in 2022."
    )}
  </p>
</section>
<section>
  <Heading classes="grid-col17" level={2} useInline={false}>2022</Heading>
  <figure class="centered-visual">
    <img alt="Landing page dark theme" src="../../oil-barrel/2022.jpg" />
  </figure>
</section>
