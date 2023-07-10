<script lang="ts">
  import typographString from "../../utils/typographString";

  export let paragraphContent: string;
  paragraphContent = typographString(paragraphContent);
</script>

<p>
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
