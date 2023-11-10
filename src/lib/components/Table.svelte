<script lang="ts">
  import typographString from "../../utils/typographString";
  import type { TableType } from "$lib/types";

  export let tableData: TableType;
  const numColumns: number = tableData.tableRows[0].length;
</script>

<figure>
  <table>
    <tbody>
      {#each tableData.tableRows as row, rowIndex}
        <tr class:grey-color={!tableData.tableLinks[numColumns * rowIndex]}>
          {#each row as column, columnIndex}
            <td
              class:title={tableData.tableAccents[
                numColumns * rowIndex + columnIndex
              ]}
              ><p
                class:text-right={tableData.tableColumns[columnIndex] ===
                  "date"}
              >
                {#if tableData.tableLinks && tableData.tableLinks[numColumns * rowIndex + columnIndex]}
                  <a
                    href={tableData.tableLinks[
                      numColumns * rowIndex + columnIndex
                    ]}>{typographString(column)}</a
                  >
                {:else}
                  {typographString(column)}
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
  .title {
    width: calc(5 * 100% / 8); /* 5 / 8 */
  }

  @media screen and (max-width: 1200px) {
    .title {
      width: calc(3 * 100% / 6); /* 3 / 6 */
    }
  }

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
