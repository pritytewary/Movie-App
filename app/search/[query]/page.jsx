import { getsearchResult } from "./getsearchResult";
import SearchResult from "./components";

export default async function SearchPage({ params: { query } }) {
  const Query = query;
  const result = await getsearchResult(Query);
  return <SearchResult query={Query} results={result} />;
}
