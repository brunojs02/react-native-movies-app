import { useSelector } from 'react-redux';

const useRemoteConfig = ({ key }) => {
  const { configs } = useSelector(({ firebaseReducer }) => firebaseReducer);
  const { _value: value = null } = configs[key] || {};

  return value;
};

export default useRemoteConfig;
