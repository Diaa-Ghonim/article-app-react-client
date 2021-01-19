if (process.env.NODE_ENV === 'production') {
  console.log('this node env now in production');
  console.log = function () {};
}
