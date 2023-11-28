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
  let sortedNotes = notes.sort((a, b) => new Date(parseDate(b.date.toLowerCase())) - new Date(parseDate(a.date.toLowerCase())));
  sortedNotes = sortedNotes.filter(note => note.categories.includes(category));
  let sortedCategories = allCategories.sort((a, b) => a.localeCompare(b));
  return {notes: sortedNotes, categories: sortedCategories};
} 