<script lang="ts">
  import Table from "$lib/components/Table.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import projects from "../../data/projects.json";
  import parseDataForTable from "../../utils/parseDataForTable";
  import typographString from "../../utils/typographString";

  const keys = ["title", "work", "date"];
  const accentKeys = [keys[0]];
  const linkKeys = [keys[0]];
  const tableData = parseDataForTable(projects, keys, accentKeys, linkKeys);
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

{#if projects && tableData}
  <Heading level={1}>{typographString(projects.length.toString() + ((projects.length === 1)?' project':' projects'))}</Heading>
  <Table {tableData} />
{:else}
  <Heading level={1}>No projects</Heading>
{/if}
