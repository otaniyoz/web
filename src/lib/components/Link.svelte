<script lang="ts">
  import typographString from "../../utils/typographString";
  import { base } from "$app/paths";

  export let href: string;
  export let text: string;

  if (text && text.length) {
    text = typographString(text);
  }
</script>

{#if href.startsWith(base)}
  <a href={href}>{text}</a>
{:else}
  <a href={href}>{text} ↗</a>
{/if}