import searchClient, { QueryResult } from "../../clients/searchClient";
import { useState } from "react";

const useSearch = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [results, setResults] = useState<QueryResult[]>([]);

  const search = (searchArg: string) => {
    setLoading(true);
    setError("");
    setSuccess(false);

    const query = searchArg.split(" ");

    searchClient
      .query(query)
      .then((res: QueryResult[]) => {
        setSuccess(true);
        setResults(res);
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { isLoading, isSuccess, error, search, results };
};

export default useSearch;
