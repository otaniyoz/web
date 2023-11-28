import { error } from '@sveltejs/kit';
import type { NoteContentType } from "$lib/types";

export async function load({ params }): Promise<NoteContentType> {
  try {
    const note = await import(`../../../../data/${params.note}.note?raw`);
    const noteContent = note.default.split('\n');
    return { post: {date: noteContent[0], title: noteContent[1], content: noteContent.slice(3) } };
  } catch {
    throw error(404, 'You tried to access ' + params.note + ', but it doesn’t exist');
  }
}