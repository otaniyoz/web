<script lang="ts">
  export let href: string;
  export let target = "_blank";
  export let outside: boolean = false;
  export let classes: string = "";
</script>

{#if outside}
  <a {href} {target} class={classes}><slot /> <div class='link-arrow'>↗</div></a>
{:else}
  <a {href} {target} class={classes}><slot /></a>
{/if}

<style>
  a {
    padding: 0;
    color: inherit;
    text-decoration: none;
    border-bottom-width: 1px; 
    border-bottom-style: solid;
    border-bottom-color: inherit;
  }
  a:hover {
    border-bottom: 1px solid var(--color-orange);
  }
  .link-arrow {
    display: inline-block;
    animation: rotate 3.2s ease-in-out 0.25s infinite;
    animation-play-state: paused;
  }
  a:hover .link-arrow {
    color: var(--color-orange);
    animation-play-state: running;
  }
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    25%, 100% { transform: rotate(360deg); }
  }
</style>
