
// Gets the meta data for a specific page from backend
export async function fetchPageMetadata(page: string) {
  const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;
  const response = await fetch(`${backendLink}${page}`);
  if (response.ok) {
    return await response.json();
  }
  return {};
}