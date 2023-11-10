<script lang="ts">
  import Table from "$lib/components/Table.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import pomes from "../../data/pomes.json";
  import parseDataForTable from "../../utils/parseDataForTable";
  import typographString from "../../utils/typographString";

  const keys = ["title", "date"];
  const accentKeys = [keys[0]];
  const linkKeys = [keys[0]];
  const tableData = parseDataForTable(pomes, keys, accentKeys, linkKeys);
</script>

<svelte:head>
  <title>Pomes</title>
</svelte:head>

{#if pomes && tableData}
  <Heading level={1}>{typographString(pomes.length.toString() + ' pomes')}</Heading>
  <Table {tableData} />
{:else}
  <Heading level={1}>No pomes</Heading>
{/if}
