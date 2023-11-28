import { error } from '@sveltejs/kit';
import fetchNotes from "../../../utils/fetchNotes";

export async function load({ params }) {
  const fetched = await fetchNotes({category: params.category}); 
  if (fetched.notes.length) { return fetched; } 
  throw error(404, 'Didn’t find notes under ' + params.category);
}