/** @format */

import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [Data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data resources");
          }
          return res.json();
        })

        .then((data) => {
          setData(data);
          setPending(false);
          setError(null);
        })

        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { Data, isPending, error };
}
