import { useEffect, useState } from 'react';
import { api } from '~/services';

export const useFetch = ({ path }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(path)
      .then(({ data: { results } }) => {
        setLoading(false);
        setResult(results);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return { loading, result };
};

export default useFetch;
