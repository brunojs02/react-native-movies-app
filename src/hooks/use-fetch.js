import { useEffect, useState } from 'react';
import { api } from '~/services';
import { THEMOVIEDB_API_KEY } from '~/constants/firebase-constants';
import useRemoteConfig from './use-remote-config';

export const useFetch = ({ path }) => {
  const apiKey = useRemoteConfig({ key: THEMOVIEDB_API_KEY });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = {
      api_key: apiKey,
    };

    api.get(path, { params })
      .then(({ data }) => {
        setResponse(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return { loading, response };
};

export default useFetch;
