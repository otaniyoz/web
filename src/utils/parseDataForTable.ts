import type { NoteType, TableType } from "$lib/types";

export default function parseDataForTable(data: NoteType[], keys: string[], accentKeys: string[], linkKeys: string[]): TableType {
  const rows: string[][] = [];
  const links: string[] = [];
  const accents: string[] = [];

  for (let i = 0; i < data.length; i++) {
    let row: string[] = [];
    let json: NoteType = data[i];
    for (let j = 0; j < keys.length; j++) {
      let kj = keys[j];
      // https://stackoverflow.com/a/69198602
      row.push(json[kj as keyof NoteType]);
      accents.push(accentKeys.indexOf(kj) !== -1 ? "true" : "");
      links.push(linkKeys.indexOf(kj) !== -1 ? json["link"] : "");
    }
    rows.push(row);
  }

  return {
    tableRows: rows, 
    tableLinks: links,
    tableColumns: keys,
    tableAccents: accents
  };
}