<script lang="ts">
  import type { NoteType } from "$lib/types";
  import { base } from "$app/paths";
  import Link from "$lib/components/Link.svelte";
  import Table from "$lib/components/Table.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import typographString from "../../../utils/typographString";
  import parseDataForTable from "../../../utils/parseDataForTable";

  const notes: NoteType[] = [];
  const allCategories: string[] = ['All'];
  const rawNotes = import.meta.glob('/src/data/*.note', { as: 'raw', eager: true });
  for (const path in rawNotes) {
    const noteContent = rawNotes[path];
    noteContent.split('\n')[2].split(' ').forEach(element => {
      if (!allCategories.includes(element)) {
        allCategories.push(element);
      }
    });
    notes.push({ 
      date: noteContent.split('\n')[0], 
      title: noteContent.split('\n')[1], 
      categories: noteContent.split('\n')[2].split(' '), 
      link: `${base}/notes/${path.split('/')[3].replace('.note', '')}`
    });
  }

  let sortedNotes = notes.sort(((a, b) => new Date(b.date) - new Date(a.date)));
  sortedNotes = sortedNotes.filter(note => note.categories.includes('Movies'));

  const keys = ['title', 'categories', 'date'];
  const accentKeys = [keys[0]];
  const linkKeys = [keys[0]];
  const tableData = parseDataForTable(sortedNotes, keys, accentKeys, linkKeys);
</script>

<svelte:head>
  <title>Notes</title>
</svelte:head>

{#if notes && tableData}
  <Heading level={1}>
    {typographString(sortedNotes.length.toString() + ((sortedNotes.length === 1)?' note':' notes'))}
    <svelte:fragment slot='subtitles'>
      {#each allCategories as category}
        <Link classes='{(category==='Movies')?'grey-color':''} regular-weight regular-size large-line-height regular-right-margin' href='{base}/notes/{category.toLowerCase()}' outside={false} target='_self'>{category}</Link>
      {/each}
    </svelte:fragment>
  </Heading>
  <Table {tableData} />
{:else}
  <Heading level={1}>No notes</Heading>
{/if}