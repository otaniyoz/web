<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import typographString from "../../../utils/typographString";
</script>

<svelte:head>
  <title>Concept note-taking app</title>
</svelte:head>

<section>
  <Heading classes="grid-col17" level={1}>{typographString("Pocket notes")}</Heading>
  <p class="grid-col17">{typographString("This is a concept note-taking app, an exercise in design. Originally made in 2022.")}</p>
</section>
<section>
  <Heading classes="grid-col17" level={2}>2022</Heading>
  <figure class="no-margin centered-visual grid no-gap three-columns">
    <div class="regular-right-padding">
      <img src="../../pocket-notes/home.png" alt="Pocket notes" />
    </div>
    <div class="regular-right-padding">
      <img src="../../pocket-notes/note-select.png" alt="Pocket notes" />
    </div>
    <div class="regular-right-padding">
      <img src="../../pocket-notes/note.png" alt="Pocket notes" />
    </div>
    <div class="regular-right-padding">
      <img src="../../pocket-notes/note-copy-select.png" alt="Pocket notes" />
    </div>
    <div class="regular-right-padding">
      <img src="../../pocket-notes/note-copy-success.png" alt="Pocket notes" />
    </div>
  </figure>
</section>
