export default ({ getState }) => next => (action) => {
  console.group();
  console.log('before', getState());
  console.log('action', action);
  const rs = next(action);
  console.log('after', getState());
  console.groupEnd();
  return rs;
};
