import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SearchComponent } from '../components/SearchComponent';
import { search } from '../actionCreator';

export const SearchContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = history.location;
  const searchString = encodeURIComponent(pathname.slice(1));
  const { isLoading, error, items } = useSelector(({ search }) => (search));
  useEffect(() => {
    dispatch(search(searchString));
  }, [dispatch, pathname])
  return <SearchComponent isLoading={isLoading} error={error} items={items} />
}