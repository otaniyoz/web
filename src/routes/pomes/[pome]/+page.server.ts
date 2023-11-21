import pomes from "../../../data/pomes.json";
import { error } from '@sveltejs/kit';
import type { NoteContentType } from "$lib/types";

export function load({ params }): NoteContentType {
  for (let i = 0; i < pomes.length; i++) {
    let pome = pomes[i];
    if (params.pome === pome.link && pome.published === 'true') {
      return {
        post: {
          title: pome.title, 
          content: pome.content,
          date: pome.date
        }
      }; 
    }
  }
  throw error(404, "The pome you tried to access is " + params.pome + ", but it doesn’t exist");
}