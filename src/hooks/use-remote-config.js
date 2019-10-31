import { useSelector } from 'react-redux';

const useRemoteConfig = ({ key }) => {
  const remoteConfig = useSelector(({ firebaseReducer }) => firebaseReducer.remoteConfig);
  const config = remoteConfig.find(cfg => cfg.key === key);

  return config ? config.value : null;
};

export default useRemoteConfig;
