import React from 'react'
import "../pages/Box2.css"

function Box2(props) {
      return (
    <div className='border-2'>
        <h2 className='style1-2'>{props.post}</h2>
        <h3 className='style3-2'>{props.name1}</h3>
        <h3 className='style2-2'>{props.position1}</h3>
    </div>
  )
}

export default Box2