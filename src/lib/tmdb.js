import { useEffect, useState } from "react";

export function useApi({ path, params }) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const url = new URL(
        [process.env.REACT_APP_TMDB_API_URL, path].join('/')
      );

      if (params) {
        params.split('&').forEach((param) => {
          const [key, value] = param.split('=');
          url.searchParams.append(key, value);
        });
      }

      url.searchParams.append('api_key', process.env.REACT_APP_TMDB_API_KEY);

      const resp = await fetch(url);
      const data = await resp.json();

      if (data.status_code) {
        setError(data);
      } else {
        setResponse(data)
      }

      setLoading(false);
    }

    fetchData();
  }, [path, params]);

  return { response, error, loading };
}

export function useParams(params = {}) {
  const searchParams = new URLSearchParams();

  Object.keys(params).forEach(function(key) {
    searchParams.append(key, params[key])
  });

  return [searchParams.toString(), searchParams];
}

export function useImage({ path, size}) {
  const url = [process.env.REACT_APP_TMDB_CDN, size ? `w${size}` : 'original', path].join('/')
  return [url]
}
