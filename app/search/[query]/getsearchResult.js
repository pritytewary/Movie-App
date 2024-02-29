export async function getsearchResult(query) {
  try {
    const response = await fetch(
      `https://imdb-api.projects.thetuhin.com/search?query=${query}`
    );
    const data = await response.json();
    console.log("data fetched");
    return data.results;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
}
