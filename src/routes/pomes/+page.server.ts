import { error } from '@sveltejs/kit';
import fetchPomes from "../../utils/fetchPomes";

export async function load() {
  try {
    const pomes = await fetchPomes(); 
    return pomes;
  } catch {
    throw error(404, 'Didn’t find pomes');
  }
}