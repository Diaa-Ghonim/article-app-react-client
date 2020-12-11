import React from 'react'
import { SearchContainer } from '../../features/search'

export default (props) => {
  return (
    <div className='main-container-holder'>
      <div className='content-holder'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <SearchContainer />
        </div>
      </div>
    </div>
  )

}
