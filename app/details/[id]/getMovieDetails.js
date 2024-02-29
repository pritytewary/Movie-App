export async function getMovieDetails(id) {
  try {
    const response = await fetch(
      `https://imdb-api.projects.thetuhin.com/title/${id}`
    );
    if (!response.ok) throw new Error("Failed to get movie");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}
