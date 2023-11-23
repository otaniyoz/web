<script lang="ts">
  import type { NoteType } from "$lib/types";
  import Table from "$lib/components/Table.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import parseDataForTable from "../../utils/parseDataForTable";
  import typographString from "../../utils/typographString";

  const pomes: NoteType[] = [];
  const rawPomes = import.meta.glob('/src/data/*.pome', { as: 'raw', eager: true });
  for (const path in rawPomes) {
    const pomeContent = rawPomes[path];
    pomes.push({ 
      date: pomeContent.split('\n')[0], 
      title: pomeContent.split('\n')[1], 
      link: path.split('/')[3].replace('.pome', '')
    });
  }

  let sortedPomes = pomes.sort(((a, b) => new Date(b.date) - new Date(a.date)));

  const keys = ["title", "date"];
  const accentKeys = [keys[0]];
  const linkKeys = [keys[0]];
  const tableData = parseDataForTable(sortedPomes, keys, accentKeys, linkKeys);
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
