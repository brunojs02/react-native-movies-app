export default () => next => (action) => {
  console.log('action', action);
  return next(action);
};
