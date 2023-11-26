<script lang="ts">
  import { page } from "$app/stores";
  import Table from "$lib/components/Table.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import parseDataForTable from "../../utils/parseDataForTable";
  import typographString from "../../utils/typographString";

  const keys = ["title", "date"];
  const accentKeys = [keys[0]];
  const linkKeys = [keys[0]];
  const tableData = parseDataForTable($page.data.fetched, keys, accentKeys, linkKeys);
</script>

<svelte:head>
  <title>Pomes</title>
</svelte:head>

{#if $page.data.fetched && tableData}
  <Heading level={1}>{typographString($page.data.fetched.length.toString() + (($page.data.fetched.length === 1)?' pome':' pomes'))}</Heading>
  <Table {tableData} />
{:else}
  <Heading level={1}>No pomes</Heading>
{/if}
