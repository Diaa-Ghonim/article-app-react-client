
import React from 'react'
import OneArticle from '../../components/Article/articleComponents/OneArticle';

export default function index(props) {
  // console.log(props);
  return (
    <>
      <OneArticle params={props.match.params}/>
    </>
  )
}
