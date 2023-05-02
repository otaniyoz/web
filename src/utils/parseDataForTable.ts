import type { NoteType, ProjectType, TableType } from "$lib/types";

export default function parseDataForTable(data: NoteType[] | ProjectType[], keys: string[], accentKeys: string[], linkKeys: string[]): TableType {
  const rows: string[][] = [];
  const links: string[] = [];
  const accents: string[] = [];

  for (let i = 0; i < data.length; i++) {
    let row: string[] = [];
    let json: NoteType | ProjectType = data[i];
    for (let j = 0; j < keys.length; j++) {
      let kj = keys[j];
      row.push(json[kj]);
      accents.push(
        accentKeys.indexOf(kj) !== -1 && json.published === "true" ? "true" : ""
      );
      links.push(
        linkKeys.indexOf(kj) !== -1 && json.published === "true"
          ? json["link"]
          : ""
      );
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