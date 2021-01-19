if (process.env.GATSBY_NODE_ENV !== 'development') {
  console.log('this node env now in production');
  console.log = function () {};
}
