<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import Link from "$lib/components/Link.svelte";
  import Table from "$lib/components/Table.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import typographString from "../../../utils/typographString";
  import parseDataForTable from "../../../utils/parseDataForTable";

  export let data;
  const keys = ['title', 'date'];
  const accentKeys = [keys[0]];
  const linkKeys = [keys[0]];
  const tableData = parseDataForTable($page.data.notes, keys, accentKeys, linkKeys);
</script>

<svelte:head>
  <title>Notes</title>
</svelte:head>

{#if $page.data.notes && tableData}
  <Heading level={1}>
    {typographString($page.data.notes.length.toString() + (($page.data.notes.length === 1)?' note':' notes'))}
    <svelte:fragment slot='subtitles'>
      {#each $page.data.categories as category}
        <Link classes='{(category==='Thoughts')?'grey-color':''} regular-weight regular-size large-line-height regular-right-margin' href='{base}/notes/{category.toLowerCase()}' outside={false} target='_self'>{category}</Link>
      {/each}
    </svelte:fragment>
  </Heading>
  <Table {tableData} />
{:else}
  <Heading level={1}>No notes</Heading>
{/if}