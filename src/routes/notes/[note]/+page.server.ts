import { error } from '@sveltejs/kit';
import type { NoteContentType } from "$lib/types";

export async function load({ params }): NoteContentType {
  try {
    const note = await import(`../../../data/${params.note}.note?raw`);
    return { post: {title: note.default.split('\n')[1], content: note.default.split('\n').slice(3) } };
  } catch {
    throw error(404, 'The note you tried to access is ' + params.note + ', but it doesn’t exist');
  }
}