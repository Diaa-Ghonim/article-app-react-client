import React from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  const onSubmitSearchForm = (e) => {
    e.preventDefault();
    const searchValue = encodeURIComponent(e.target.search.value);
    history.push(`/search=${searchValue}`);
  };
  return (
    <>
      <form onSubmit={onSubmitSearchForm}>
        <input
          type='search'
          name='search'
          autoComplete='on'
          placeholder='search'
        />
      </form>
    </>
  );
};
