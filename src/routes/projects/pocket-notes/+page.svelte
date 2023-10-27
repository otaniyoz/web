<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import SectionGrid from "$lib/components/SectionGrid.svelte";
  import typographString from "../../../utils/typographString";
</script>

<svelte:head>
  <title>Concept note-taking app</title>
</svelte:head>

<SectionGrid>
  <Heading classes="grid-col17" level={1} useInline={false}>
    {typographString("Pocket notes")}
  </Heading>
  <p class="grid-col17">
    {typographString(
      "This is a concept note-taking app, an exercise in design. Originally made in 2022."
    )}
  </p>
  <Heading classes="grid-col17" level={2} useInline={false}>2022</Heading>
  <figure class="no-margin centered-visual grid regular-gap three-columns">
    <img src="../../pocket-notes/home.png" alt="Pocket notes" />
    <img src="../../pocket-notes/note-select.png" alt="Pocket notes" />
    <img src="../../pocket-notes/note.png" alt="Pocket notes" />
    <img src="../../pocket-notes/note-copy-select.png" alt="Pocket notes" />
    <img src="../../pocket-notes/note-copy-success.png" alt="Pocket notes" />
  </figure>
</SectionGrid>
