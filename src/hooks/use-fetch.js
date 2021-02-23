import { useEffect, useState } from 'react';
import { api } from '~/services';
import { THEMOVIEDB_API_KEY } from '~/constants/firebase-constants';
import useRemoteConfig from './use-remote-config';

export const useFetch = ({ path }) => {
  const apiKey = useRemoteConfig({ key: THEMOVIEDB_API_KEY });
  const [state, setState] = useState({ loading: true, response: null });

  useEffect(() => {
    const params = { api_key: apiKey };
    const config = { params };

    api
      .get(path, config)
      .then(({ data }) => setState({ response: data, loading: false }))
      .catch(() => setState({ loading: false }));
  }, []);

  return state;
};

export default useFetch;
