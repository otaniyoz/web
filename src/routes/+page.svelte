<script lang="ts">
  import HeadingWithSuper from "$lib/components/HeadingWithSuper.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
</script>

<svelte:head>
  <title>Web-home of Otaniyoz</title>
</svelte:head>

<section class="page-section">
  <HeadingWithSuper title="About" level={2} superTitle={"me"} />
  <figure class="welcome-image">
    <img alt="Stylized photograph of a man" src="home-banner.jpg" />
  </figure>
  <Paragraph
    paragraphClass="grid-col14"
    paragraphContent="Hallo cyber-stranger. This is a web-home for Otaniyoz. Here you can find various projects and sporadic notes -- all on perhaps too far spread topics and in too different languages. But I might just as well be wrong, so don't take my word for it -- go and see for yourself. Or don't."
  />
</section>

<style>
  .welcome-image {
    margin: 0;
    grid-column: 1 / -1;
    aspect-ratio: 1 / 1.25;
  }

  @media screen and (min-width: 1200px) {
    .welcome-image {
      aspect-ratio: 2 / 1;
    }
  }
</style>
