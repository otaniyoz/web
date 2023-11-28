import { error } from '@sveltejs/kit';
import fetchPomes from '../../../utils/fetchPomes';

export async function load({ params }) {
  const fetched = await fetchPomes({category: params.category}); 
  if (fetched.notes.length) { return fetched; } 
  throw error(404, 'Didn’t find pomes under ' + params.category);
}