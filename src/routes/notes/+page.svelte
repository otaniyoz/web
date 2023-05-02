<script lang="ts">
  import notes from "../../data/notes.json";
  import parseDataForTable from "../../utils/parseDataForTable";
  import Table from "$lib/components/Table.svelte";
  import HeadingWithSuper from "$lib/components/HeadingWithSuper.svelte";

  const keys = ["title", "date"];
  const accentKeys = [keys[0]];
  const linkKeys = [keys[0]];
  const tableData = parseDataForTable(notes, keys, accentKeys, linkKeys);
</script>

<svelte:head>
  <title>Notes</title>
</svelte:head>

<section class="page-section">
  {#if notes}
    <HeadingWithSuper
      title="Notes"
      level={2}
      superTitle={notes.length.toString()}
    />
  {/if}
  {#if tableData}
    <Table {tableData} />
  {/if}
</section>
