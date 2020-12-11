import React from 'react';
import Spinner from '../../../shared/Spinner';

export const SearchComponent = ({ isLoading, error, items }) => {
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <div> error.msg </div>
      ) : (
            <div >
              <h1> Search Result Not Devoloped Yet !!</h1>
            </div>
          )}
    </div>
  )
}

// items.map((item, i) => (
//   <div key={i}>
//     <p>{item.msg}</p>
//   </div>
// ))