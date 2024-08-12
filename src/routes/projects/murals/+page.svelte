<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import typographString from "../../../utils/typographString";
</script>

<svelte:head>
  <title>Murals</title>
</svelte:head>

<section>
  <Heading classes="grid-col17" level={1}>
    Murals
    <svelte:fragment slot="subtitles">
      <Link classes="regular-weight regular-size regular-right-margin" href="https://otaniyoz.github.io/murals">See online</Link>
      <Link classes="regular-weight regular-size regular-right-margin" href="https://github.com/otaniyoz/murals" outside={true}>See code on Github</Link>
    </svelte:fragment>
  </Heading>
  <p class="grid-col17">{typographString("This is a collection of murals: an attempt to discover, preserve, study, and be inspired by street artworks.")}</p>
  <figure class="no-margin centered-visual grid no-gap three-columns">
    <div class="regular-right-padding grid-col13"><img src="../../murals/desktop.png" alt="Pocket puzzles" /></div>
    <div class="regular-right-padding"><img src="../../murals/mobile.png" alt="Pocket puzzles" /></div>
  </figure>
</section>
