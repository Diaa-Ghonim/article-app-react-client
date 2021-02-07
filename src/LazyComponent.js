import React from 'react';

export default function LazyComponent({ asyncComponent }) {
  const O = React.lazy(() => asyncComponent);
  return (
    <React.Suspense fallback=''>
      <O />
    </React.Suspense>
  );
}
