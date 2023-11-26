import { base } from "$app/paths";
import parseDate from "./parseDate";
import type { NoteType } from "$lib/types";

export default async function fetchNotes({category=''}) {
  const notes: NoteType[] = [];
  const allCategories: string[] = ['All'];
  const rawNotes = await import.meta.glob('/src/data/*.note', { as: 'raw', eager: true });
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
      link: `${base}/notes/${path.split('/')[3].replace('.note', '')}`
    });
  }
  let sortedNotes = notes.sort((a, b) => new Date(parseDate(a.date.toLowerCase())) - new Date(parseDate(b.date.toLowerCase())));
  if (allCategories.includes(category)) {
    sortedNotes = sortedNotes.filter(note => note.categories.includes(category));
  }
  return {notes: sortedNotes, categories: allCategories};
} 