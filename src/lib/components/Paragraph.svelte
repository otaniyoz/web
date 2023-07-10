<script lang="ts">
  import typographString from "../../utils/typographString";
  import type { paragraphClassType } from "$lib/types";

  export let paragraphContent: string;
  export let paragraphClass: paragraphClassType | undefined;
  paragraphContent = typographString(paragraphContent);
</script>

<p class={paragraphClass ? paragraphClass : ""}>
  {paragraphContent}
</p>

<style>
  p {
    margin-block: 0;
    color: var(--color-dark);
    font-size: var(--font-size-regular);
    line-height: var(--line-height-large);
    padding-bottom: var(--gap-regular);
  }
</style>
