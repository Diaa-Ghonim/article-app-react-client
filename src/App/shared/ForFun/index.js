import React, { useCallback, useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../components/Article/actions';
import { ArticleReducer, initialState } from '../../components/Article/reducer';

export const CounterComponent = ({ value }) => {
  const dispatche = useDispatch();
  const incrementCounter = useCallback(() => dispatche(increment()), [
    dispatche,
  ]);
  const counter = useSelector((state) => state.articles.counter);

  useEffect(() => {
    const setTime = setTimeout(() => {
      console.log('hello setTime out');
    }, 3000);
    return () => {
      clearTimeout(setTime);
    };
  }, []);
  const [state, dispatch] = useReducer(ArticleReducer, {});

  console.log(state, 'from func component state');
  return (
    <div>
      <span>{counter}</span>
      <MyIncrementButton onIncrement={incrementCounter} />
    </div>
  );
};

export const MyIncrementButton = React.memo(({ onIncrement }) => {
  console.log('hhhhhh');

  return <button onClick={onIncrement}>Increment counter</button>;
});
