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
