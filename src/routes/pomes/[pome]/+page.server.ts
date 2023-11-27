import { error } from '@sveltejs/kit';
import type { NoteContentType } from "$lib/types";

export async function load({ params }): Promise<NoteContentType> {
  try {
    const pome = await import(`../../../data/${params.pome}.pome?raw`);
    return { post: {title: pome.default.split('\n')[1], content: pome.default.split('\n').slice(2), date: pome.default.split('\n')[0] } };
  } catch {
    throw error(404, 'The pome you tried to access is ' + params.pome + ', but it doesn’t exist');
  }
}