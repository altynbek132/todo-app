export const logMiddleware = ({ getState }) => (next) => (action) => {
  // store with only getState and dispatch
  console.log('action - logMiddlware', action);
  console.log('getState() - logMiddlware', getState());

  return next(action);
};

export const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') return next({ type: action });
  return next(action);
};
