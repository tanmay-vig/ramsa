import React from 'react'

function Part2(props) {
    const style = {
        padding: "10px 40px"
    }
  return (
    <div style={style}>
        <h2 style={{color: "red"}}>{props.name}</h2>
        <div>{props.content1}</div>
        <br />
        <div>
        
          <a href="./AbstractTemplate.docx" download="Abstract_Template"></a>
          <a href="https://docs.google.com/document/d/13rl-i3ZyWtl8N5FfhLqX-jjdLozFuZjr/edit?usp=drive_link&ouid=108921589828685693583&rtpof=true&sd=true">
              <button className="btn btn-success">Abstract Template</button>
          </a>
        
          <br />
          <br />
          <a href={props.link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-success">{props.title}</button>
          </a>
        
        </div>

        
        {/* <div><a href="./AbstractTemplate.doc" download="Abstract_Template">Abstract Template</a></div>
        <div><a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a></div> */}
        <div><br />{props.content2}</div>
    </div>
  )
}

export default Part2
