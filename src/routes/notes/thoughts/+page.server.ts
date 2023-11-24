import { error } from '@sveltejs/kit';
import fetchNotes from "../../../utils/fetchNotes";
import type { NoteContentType } from "$lib/types";

export async function load({ params }) {
  try {
    const notes = await fetchNotes({category: 'Thoughts'}); 
    return notes;
  } catch {
    throw error(404, 'The note you tried to access is ' + params.note + ', but it doesn’t exist');
  }
}