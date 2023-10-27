<script lang="ts">
  export let src: string;
  export let alt: string;
  export let classes: string = "";
</script>

  <img {src} {alt} class={classes} />

<style>
  img {
    width: 100%;
    max-width: 100%;
    background-color: var(--color-light);
    padding-bottom: var(--gap-large);
  }
</style>
