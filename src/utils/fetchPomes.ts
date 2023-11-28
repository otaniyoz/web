import { base } from "$app/paths";
import parseDate from "./parseDate";
import type { NoteType } from "$lib/types";

export default async function fetchPomes() {
  const notes: NoteType[] = [];
  const rawNotes = await import.meta.glob('/src/data/*.pome', { as: 'raw', eager: true });
  for (const path in rawNotes) {
    const noteContent = rawNotes[path].split('\n');
    notes.push({ 
      date: noteContent[0], 
      title: noteContent[1], 
      categories: '', 
      link: `${base}/pomes/${path.split('/')[3].replace('.pome', '')}`
    });
  }
  let sortedNotes = notes.sort((a, b) => new Date(parseDate(b.date.toLowerCase())) - new Date(parseDate(a.date.toLowerCase())));
  return { fetched: sortedNotes };
} 