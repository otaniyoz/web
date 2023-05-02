<script lang="ts">
  import typographString from "../../utils/typographString";
  import type { TableType } from "$lib/types";

  export let tableData: TableType;

  const numRows: number = tableData.tableRows.length;
  const numColumns: number = tableData.tableRows[0].length;

  for (let i = 0; i < numColumns; i++) {
    tableData.tableColumns[i] = typographString(tableData.tableColumns[i]);
    for (let j = 0; j < numRows; j++) {
      tableData.tableRows[j][i] = typographString(tableData.tableRows[j][i]);
    }
  }
</script>

<article
  class="table-container"
  style="grid-template-rows: repeat({numRows}, minmax(min-content, max-content));"
>
  {#each tableData.tableRows as row, rowIndex}
    <div
      class="table-row"
      style="grid-template-columns: repeat({numColumns}, minmax(0, 1fr));"
    >
      {#each row as column, columnIndex}
        <p
          class:accent={tableData.tableAccents[
            numColumns * rowIndex + columnIndex
          ]}
          class:text-right={tableData.tableColumns[columnIndex] === "date"}
        >
          {#if tableData.tableLinks && tableData.tableLinks[numColumns * rowIndex + columnIndex]}
            <a href={tableData.tableLinks[numColumns * rowIndex + columnIndex]}
              >{column}</a
            >
          {:else}
            {column}
          {/if}
        </p>
      {/each}
    </div>
  {/each}
</article>

<style>
  p {
    hyphens: auto;
  }

  .table-container {
    display: grid;
    grid-column: 1/-1;
    row-gap: var(--gap-regular);
    grid-template-columns: repeat(1, 1fr);
  }

  .table-row {
    display: grid;
    overflow-x: auto;
    overflow-y: clip;
    column-gap: var(--gap-small);
    grid-template-rows: repeat(1, 1fr);
  }

  .table-row:hover,
  .table-row:hover > *,
  .table-row:hover > p > * {
    background-color: var(--color-dark);
    color: var(--color-light);
  }
</style>
