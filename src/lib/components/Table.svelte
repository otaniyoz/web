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

<figure>
  <table>
    <tbody>
      {#each tableData.tableRows as row, rowIndex}
        <tr>
          {#each row as column, columnIndex}
            <td
              ><p
                class:accent={tableData.tableAccents[
                  numColumns * rowIndex + columnIndex
                ]}
                class:text-right={tableData.tableColumns[columnIndex] ===
                  "date"}
              >
                {#if tableData.tableLinks && tableData.tableLinks[numColumns * rowIndex + columnIndex]}
                  <a
                    href={tableData.tableLinks[
                      numColumns * rowIndex + columnIndex
                    ]}>{column}</a
                  >
                {:else}
                  {column}
                {/if}
              </p></td
            >
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</figure>

<style>
  p {
    hyphens: auto;
  }

  figure {
    overflow: auto;
    grid-column: 1/-1;
    margin: 0;
  }

  table {
    width: 100%;
    border: none;
    border-collapse: collapse;
  }

  tr {
    vertical-align: top;
  }

  tr > td {
    padding-bottom: var(--gap-small);
  }

  tr:hover,
  tr:hover > td > p,
  tr:hover > td > p > a {
    background-color: var(--color-dark);
    color: var(--color-light);
  }

  tr:hover > td > p > a {
    border-bottom: 1px solid var(--color-light);
  }

  tr:hover > td > p > a:hover {
    border-bottom: 1px solid var(--color-orange);
  }
</style>
