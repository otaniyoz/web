<script lang="ts">
  import Table from "$lib/components/Table.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import notes from "../../data/notes.json";
  import typographString from "../../utils/typographString";
  import parseDataForTable from "../../utils/parseDataForTable";

  const keys = ["title", "date"];
  const accentKeys = [keys[0]];
  const linkKeys = [keys[0]];
  const tableData = parseDataForTable(notes, keys, accentKeys, linkKeys);
</script>

<svelte:head>
  <title>Notes</title>
</svelte:head>

{#if notes && tableData}
  <Heading level={1}>{typographString(notes.length.toString() + ' notes')}</Heading>
  <Table {tableData} />
{:else}
  <Heading level={1}>No notes</Heading>
{/if}
