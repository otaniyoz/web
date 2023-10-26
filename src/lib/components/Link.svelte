<script lang="ts">
  import typographString from "../../utils/typographString";

  export let href: string;
  export let text: string;
  export let target = "_blank";
  export let outside: boolean;

  if (text && text.length) {
    text = typographString(text);
  }
</script>

{#if outside}
  <a {href} {target}>{text}</a>↗
{:else}
  <a {href} {target}>{text}</a>
{/if}

<style>
  a {
    padding: 0;
    font-size: inherit;
    font-weight: inherit;
    text-decoration: none;
    color: var(--color-dark);
    border-bottom: 1px solid var(--color-dark);
  }

  a:hover {
    border-bottom: 1px solid var(--color-orange);
  }
</style>
