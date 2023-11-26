import { error } from '@sveltejs/kit';
import fetchNotes from "../../../utils/fetchNotes";

export async function load() {
  try {
    const notes = await fetchNotes({category: 'Books'}); 
    return notes;
  } catch {
    throw error(404, 'Didn’t find notes');
  }
}