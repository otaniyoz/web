import { base } from "$app/paths";
import parseDate from "./parseDate";
import type { NoteType } from "$lib/types";

export default async function fetchProjects({category='all'}) {
  const projects: NoteType[] = [];
  const allCategories: string[] = [];
  const rawProjects = await import.meta.glob('/src/data/*.project', { as: 'raw', eager: true });
  for (const path in rawProjects) {
    const projectContent = rawProjects[path].split('\n');
    projectContent[2].split(',').forEach(element => {
      if (!allCategories.includes(element)) {
        allCategories.push(element);
      }
    });
    projects.push({ 
      date: projectContent[0], 
      title: projectContent[1], 
      categories: projectContent[2], 
      link: `${base}/projects/${path.split('/')[3].replace('.project', '')}`
    });
  }
  let sortedProjects = projects.sort((a, b) => new Date(parseDate(a.date.toLowerCase())) - new Date(parseDate(b.date.toLowerCase())));
  sortedProjects = sortedProjects.filter(project => project.categories.includes(category));
  let sortedCategories = allCategories.sort((a, b) => a.localeCompare(b));
  return {projects: sortedProjects, categories: sortedCategories};
} 