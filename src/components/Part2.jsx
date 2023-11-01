import React from 'react'

function Part2(props) {
    const style = {
        padding: "10px 40px"
    }
  return (
    <div style={style}>
        <h2 style={{color: "red"}}>{props.name}</h2>
        <h3>{props.content1}</h3>
        <h3><a href={props.link}>{props.title}</a></h3>
        <h3>{props.content2}</h3>
    </div>
  )
}

export default Part2