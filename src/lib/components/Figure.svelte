<script lang="ts">
  export let classes: string = "";
</script>

<figure class={classes}>
  <slot />
</figure>

<style>
  figure {
    margin: 0;
    padding-bottom: var(--gap-xlarge);
  }
</style>