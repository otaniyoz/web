import { error } from '@sveltejs/kit';
import type { NoteContentType } from "$lib/types";

export async function load({ params }): Promise<NoteContentType> {
  try {
    const pome = await import(`../../../data/${params.pome}.pome?raw`);
    const pomeContent = pome.default.split('\n');
    return { post: {title: pomeContent[1], content: pomeContent.slice(2), date: pomeContent[0] } };
  } catch {
    throw error(404, 'The pome you tried to access is ' + params.pome + ', but it doesn’t exist');
  }
}