import notes from "../../../data/notes.json";
import { error } from '@sveltejs/kit';
import type { NoteContentType } from "$lib/types";

export function load({ params }): NoteContentType {
  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    if (params.note === note.link && note.published === 'true') {
      return {
        post: {
          title: note.title, 
          content: note.content
        }
      }; 
    }
  }
  throw error(404, "The note you tried to access is " + params.note + ", but it doesn’t exist");
}