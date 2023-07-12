<script lang="ts">
  import HeadingWithSuper from "$lib/components/HeadingWithSuper.svelte";
  import projects from "../../data/projects.json";
  import Table from "$lib/components/Table.svelte";
  import parseDataForTable from "../../utils/parseDataForTable";

  const keys = ["title", "work", "date"];
  const accentKeys = [keys[0]];
  const linkKeys = [keys[0]];
  const tableData = parseDataForTable(projects, keys, accentKeys, linkKeys);
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

{#if projects}
  <HeadingWithSuper
    level={1}
    title="Projects"
    superTitle={projects.length.toString()}
  />
{/if}
{#if tableData}
  <Table {tableData} />
{/if}
