import React from 'react'

function Part2(props) {
    const style = {
        padding: "10px 40px"
    }
  return (
    <div style={style}>
        <h2 style={{color: "red"}}>{props.name}</h2>
        <div><a href="./AbstractTemplate.doc" download="Abstract_Template">Abstract Template</a></div>
        <div>{props.content1}</div>
        <div><a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a></div>
        <div>{props.content2}</div>
    </div>
  )
}

export default Part2