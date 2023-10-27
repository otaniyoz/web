<script lang="ts">
  export let src: string;
  export let alt: string;
  export let classes: string = "";
</script>

<slot name="sup" />
<img {src} {alt} class={classes} />
<slot name="sub" />

<style>
  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    background-color: var(--color-light);
  }
</style>
