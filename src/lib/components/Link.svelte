<script lang="ts">
  export let href: string;
  export let target = "_blank";
  export let outside: boolean;
  export let classes: string = "";
</script>

{#if outside}
  <a {href} {target} class={classes}><slot />↗</a>
{:else}
  <a {href} {target} class={classes}><slot /></a>
{/if}

<style>
  a {
    padding: 0;
    text-decoration: none;
    color: var(--color-dark);
    border-bottom: 1px solid var(--color-dark);
  }

  a:hover {
    border-bottom: 1px solid var(--color-orange);
  }
</style>
