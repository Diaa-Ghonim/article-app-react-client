
import React from 'react'
import { ShowArticle } from '../../features/showArticle';
export default function index(props) {
  return (
    <>
      <div className='main-container-holder'>

        <div className='content-holder'>
          <ShowArticle params={props.match.params} />

        </div>
      </div>
    </>
  )
}
