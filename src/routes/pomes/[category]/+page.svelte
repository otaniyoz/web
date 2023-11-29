<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import Link from "$lib/components/Link.svelte";
  import Table from "$lib/components/Table.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import parseDataForTable from "../../../utils/parseDataForTable";
  import typographString from "../../../utils/typographString";

  const keys = ["title", "date"];
  const accentKeys = [keys[0]];
  const linkKeys = [keys[0]];
  const tableData = parseDataForTable($page.data.notes, keys, accentKeys, linkKeys);
</script>

<svelte:head><title>Pomes</title></svelte:head>
{#if $page.data.notes && tableData}
  <section>
    <Heading level={1} classes="grid-col17">
      {typographString($page.data.notes.length.toString() + (($page.data.notes.length === 1)?' pome':' pomes'))}
      <svelte:fragment slot='subtitles'>
        {#each $page.data.categories as category}
          <Link classes='{(category===$page.params.category)?'grey-color':''} regular-weight regular-size large-line-height regular-right-margin' href='{base}/pomes/{category}' outside={false} target='_self'>{typographString(category)}</Link>
        {/each}
      </svelte:fragment>
    </Heading>
    <Table {tableData} />
  </section>
{:else}
  <Heading level={1}>No pomes</Heading>
{/if}