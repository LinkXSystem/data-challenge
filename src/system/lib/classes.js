export default target => {
  if (typeof target === 'string') return target;

  if (!(target instanceof Array))
    throw new Error('please checking the value that target is array !!!');

  return target.join(' ');
};
