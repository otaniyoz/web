import { error } from '@sveltejs/kit';
import fetchProjects from "../../../utils/fetchProjects";

export async function load({ params }) {
  const fetched = await fetchProjects({category: params.category.replace('-', ' ')}); 
  if (fetched.projects.length) { return fetched; } 
  throw error(404, 'Didn’t find projects under ' + params.category);
}