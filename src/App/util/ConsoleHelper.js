if (process.env.GATSBY_NODE_ENV === 'production') {
  console.log('this node env now in production');
  console.log = function () {};
}