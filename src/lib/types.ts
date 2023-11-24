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
  link: string;
}

export type NoteType = { 
  title: string; 
  date: string;
  categories: string;
  link: string;
};

export type NoteContentType = { 
  post: {
    title: string; 
    content: string[]; 
    date: string;
  }
};

export type TableType = {
  tableRows: string[][];
  tableLinks: string[];
  tableAccents: string[];
  tableColumns: string[];
}