const compose = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);
export default compose;
