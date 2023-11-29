import { base } from "$app/paths";
import parseDate from "./parseDate";
import type { NoteType } from "$lib/types";

export default async function fetchPomes({category='all'}) {
  const notes: NoteType[] = [];
  const allCategories: string[] = [];
  const rawNotes = await import.meta.glob('/src/data/*.pome', { as: 'raw', eager: true });
  for (const path in rawNotes) {
    const noteContent = rawNotes[path].split('\n');
    noteContent[2].split(',').forEach(element => {
      if (!allCategories.includes(element)) {
        allCategories.push(element);
      }
    });
    notes.push({ 
      date: noteContent[0], 
      title: noteContent[1], 
      categories: noteContent[2], 
      link: `${base}/pomes/${category}/${path.split('/')[3].replace('.pome', '')}`
    });
  }
  // https://stackoverflow.com/a/60688789
  let sortedNotes = notes.sort((a, b) => new Date(parseDate(b.date.toLowerCase())).valueOf() - new Date(parseDate(a.date.toLowerCase())).valueOf());
  sortedNotes = sortedNotes.filter(note => note.categories.includes(category));
  let sortedCategories = allCategories.sort((a, b) => a.localeCompare(b));
  return {notes: sortedNotes, categories: sortedCategories};
} 