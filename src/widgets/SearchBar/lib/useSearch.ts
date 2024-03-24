import { useEffect, useState } from "react";

import { client } from "@/shared/api/firebase";

export const useSearch = <T>(
  searchValue: string,
  collection: string,
  queryBy: string
) => {
  const [isTyping, setIsTyping] = useState(false);

  const [value, setValue] = useState<T[]>([]);

  useEffect(() => {
    setIsTyping(true);

    const getData = setTimeout(() => {
      client
        .collections(collection)
        .documents()
        .search({ q: searchValue.toLowerCase(), query_by: queryBy })
        .then((data) => {
          const docsArray = data.hits?.map((hit) => hit.document as T);
          setValue(docsArray || []);
          setIsTyping(false);
        });
    }, 500);

    return () => {
      clearTimeout(getData);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return { isTyping, value };
};
