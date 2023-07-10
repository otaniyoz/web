export type CardMapType = {
  title?: string;
  description?: string;
  link?: string;
  image?: string;
  video?: string;
};

export type ProjectType = {
  title: string;
  work: string;
  date: string;
  published: string;
  link: string;
}

export type NoteType = { 
  title: string; 
  content: string[] 
  date: string;
  published: string;
  link: string;
};

export type NoteContentType = { 
  post: {
    title: string; 
    content: string[] 
  }
};

export type TableType = {
  tableRows: string[][];
  tableLinks: string[];
  tableAccents: string[];
  tableColumns: string[];
}

export type paragraphClassType = "grid-col14" | "grid-col23" | "grid-col-all";