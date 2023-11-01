
import '../pages/css/Box2.css'

function Box3(props) {
  return (
    <div className='border-3'>
        <h2 className='style1-1'>{props.post}</h2>
        <h3 className='style3-1'>{props.name1}</h3>
        <h3 className='style2-1'>{props.position1}</h3>
    </div>
  )
}

export default Box3