<script lang="ts">
  import type { NoteType } from "$lib/types";
  import Table from "$lib/components/Table.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import typographString from "../../utils/typographString";
  import parseDataForTable from "../../utils/parseDataForTable";

  const notes: NoteType[] = [];
  const rawNotes = import.meta.glob('/src/data/*.note', { as: 'raw', eager: true });
  for (const path in rawNotes) {
    const noteContent = rawNotes[path];
    notes.push({ 
      date: noteContent.split('\n')[0], 
      title: noteContent.split('\n')[1], 
      link: path.split('/')[3].replace('.note', '')
    });
  }

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
