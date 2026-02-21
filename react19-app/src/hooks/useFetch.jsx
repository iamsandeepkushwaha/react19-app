// // Custom Hook with useEffect
// // API Fetch Hook

// import { useEffect, useState } from "react";

// // Custom Hook: API Fetch
// function useFetch(url) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(url)
//       .then(res => res.json())
//       .then(json => {
//         setData(json);
//         setLoading(false);
//       });
//   }, [url]);

//   return { data, loading };
// }

// export default useFetch;

import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await res.json();
        if (isMounted) setData(json);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;