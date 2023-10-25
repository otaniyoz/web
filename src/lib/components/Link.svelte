<script lang="ts">
  import typographString from "../../utils/typographString";

  export let href: string;
  export let text: string;
  export let target = "_blank";
  export let externalLink: boolean;

  if (text && text.length) {
    text = typographString(text);
  }
</script>

{#if externalLink}
  <a {href} {target}>{text}</a>↗
{:else}
  <a {href} {target}>{text}</a>
{/if}

<style>
  a {
    padding: 0;
    font-weight: inherit;
    text-decoration: none;
    color: var(--color-dark);
    font-size: var(--font-size-regular);
    border-bottom: 1px solid var(--color-dark);
  }

  a:hover {
    border-bottom: 1px solid var(--color-orange);
  }
</style>
