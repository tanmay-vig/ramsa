import React from 'react'
import '../pages/Box2.css'

function Box1(props) {
  return (
    <div className='border-1'>
      <h2 className='style1-1'>{props.post}</h2>
      <h3 className='style3-1'>{props.name1}</h3>
      <h3 className='style2-1'>{props.position1}</h3>
      <h3 className='style3-1'>{props.name2}</h3>
      <h3 className='style2-1'>{props.position2}</h3>
    </div>
  )
}

export default Box1