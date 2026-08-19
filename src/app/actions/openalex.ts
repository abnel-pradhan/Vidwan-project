// app/actions/openalex.ts
'use server';

export interface FormattedPublication {
  openAlexId: string;
  title: string;
  publicationYear: number;
  doi: string | null;
  journalName: string | null;
  publisher: string | null;
  citationCount: number;
  isOpenAccess: boolean;
  openAccessUrl: string | null;
  landingPageUrl: string | null;
}

/**
 * Step 1: Search OpenAlex for an author by name or ORCID to get their OpenAlex ID.
 */
export async function searchOpenAlexAuthor(query: string) {
  try {
    const res = await fetch(
      `https://api.openalex.org/authors?search=${encodeURIComponent(query)}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error('Failed to fetch author from OpenAlex');
    
    const data = await res.json();
    return {
      success: true,
      authors: (data.results || []).map((author: any) => ({
        id: author.id, // e.g., "https://openalex.org/A5023888391"
        displayName: author.display_name,
        worksCount: author.works_count,
        citedByCount: author.cited_by_count,
        lastKnownInstitution: author.last_known_institutions?.[0]?.display_name || 'N/A',
        orcid: author.orcid || null,
      })),
    };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Step 2: Fetch and format all publications for a specific OpenAlex Author ID.
 */
export async function fetchFacultyPapers(authorOpenAlexId: string) {
  try {
    // Extract ID if full URL is passed (e.g. "https://openalex.org/A5023888391" -> "A5023888391")
    const cleanId = authorOpenAlexId.replace('https://openalex.org/', '');
    
    const res = await fetch(
      `https://api.openalex.org/works?filter=author.id:${cleanId}&sort=publication_year:desc&per-page=50`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error('Failed to fetch works from OpenAlex');

    const data = await res.json();

    const formattedPapers: FormattedPublication[] = (data.results || []).map((work: any) => ({
      openAlexId: work.id,
      title: work.title || 'Untitled Work',
      publicationYear: work.publication_year || new Date().getFullYear(),
      doi: work.doi || null,
      journalName: work.primary_location?.source?.display_name || null,
      publisher: work.primary_location?.source?.host_organization_name || null,
      citationCount: work.cited_by_count || 0,
      isOpenAccess: work.open_access?.is_oa || false,
      openAccessUrl: work.open_access?.oa_url || null,
      landingPageUrl: work.primary_location?.landing_page_url || work.doi || null,
    }));

    return { success: true, count: data.meta?.count || formattedPapers.length, papers: formattedPapers };
  } catch (error: any) {
    return { success: false, error: error.message, papers: [] };
  }
}