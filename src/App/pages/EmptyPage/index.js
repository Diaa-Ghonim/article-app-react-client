import React from 'react';
import { Route } from 'react-router-dom';
export default function EmptyPage() {
  return (
    <Route
      exact
      path='/EmptyPage'
      render={(value) => {
        return <div>Empty page</div>;
      }}
    />
  );
}
