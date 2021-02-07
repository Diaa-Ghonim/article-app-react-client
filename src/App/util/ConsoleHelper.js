if (process.env.NODE_ENV === 'production') {
  console.log('NODE_ENV is production');
  console.log = function () {};
}
