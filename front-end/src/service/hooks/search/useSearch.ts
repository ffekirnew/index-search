import searchClient from "../../clients/searchClient";
import { useState } from "react";

const useSearch = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isSuccess, setSuccess] = useState<boolean>(false);

  const search = (searchArg: string) => {
    setLoading(true);
    setError("");
    setSuccess(false);

    const query = searchArg.split(" ");

    searchClient
      .query(query)
      .then((res) => {
        setSuccess(true);
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { isLoading, isSuccess, error, search };
};

export default useSearch;
