import React, { useEffect, useState } from 'react';
import { api } from '~/services';

const withData = (Component, path) => (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(path)
      .then(({ data: { results } }) => {
        setLoading(false);
        setData(results);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Component
      {...props}
      data={data}
      isLoading={loading}
    />
  );
};

export default withData;
