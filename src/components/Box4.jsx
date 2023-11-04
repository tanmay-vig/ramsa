import React from 'react';
import Box4a from './Box4a';
import Box4b from './Box4b';
import '../pages/Box2.css'
import '../pages/App.css'

function Box4() {
    // const border = {
    //     border: "1px solid black",
    //     borderTop: "0px", 
    //     padding: "10px 20px",
    //     textAlign: "center",
    //     width: "881px"
    //   }
    // const style = {
    //     display : "flex",
    //     flexDirection : "row",
    //     justifyContent : "center",
    //     // alignItems : "center",
    //     flexWrap: "wrap"
    //   }
  return (
    <div>
        <Box4a name = "DEPARTMENTAL COMMITTEE"></Box4a>
        <div className='style2'>
            <div className='style'>
                <Box4b name1= "Prof. B. P. Chamola," position1="Professor"></Box4b>
                <div className='style-special4'></div>
                <div className='style-special5'></div>
                <Box4b name1= "Prof. Lokendra Kumar," position1="Professor"></Box4b>
            </div>
            <div className='style'>
                <Box4b name1= "Prof. Amit Srivastava," position1="Professor"></Box4b>
                <div className='style-special3'></div>
                <Box4b name1= "Dr.  Lakhveer Kaur," position1="Associate Professor"></Box4b>
            </div>
        </div>
        <div className='style4'>
            <div className='box-4style'>
                <Box4b name1= "Dr. Kamlesh Kumar Shukla," position1="Assistant Professor"></Box4b>
                <Box4b name1= "Dr.  Neha Singhal," position1="Assistant Professor"></Box4b>
                <Box4b name1= "Dr. Manish Kumar Bansal," position1="Assistant Professor"></Box4b>
                <Box4b name1= "Dr. Shruti," position1="Assistant Professor"></Box4b>
                <Box4b name1= "Dr. Ram Surat Chauhan," position1="Assistant Professor"></Box4b>
                <Box4b name1= "Dr. Gaurav Aggarwal," position1="Assistant Professor"></Box4b>
                <Box4b name1= "Dr. Mukesh Kumar Nagar," position1="Assistant Professor"></Box4b>
                <Box4b name1= "Dr. Shashank Goel," position1="Assistant Professor"></Box4b>
            </div>
            <div className='box-4style'>
                <Box4b name1= "Dr. Neha Ahlawat," position1="Assistant Professor"></Box4b>
                <Box4b name1= "Dr. Mohd. Sarfaraz," position1="Assistant Professor"></Box4b>
                <Box4b name1= "Dr. Shikha Pandey," position1="Assistant Professor"></Box4b>
                <Box4b name1= "Dr. Nisha Shukla," position1="Assistant Professor"></Box4b>
                <Box4b name1= "Dr. Aradhana Narang," position1="Assistant Professor"></Box4b>
                <Box4b name1= "Dr. Ayushi Singh Sengar," position1="Assistant Professor"></Box4b>
                <Box4b name1= "Dr. Shashankaditya Upadhyay," position1="Assistant Professor"></Box4b>
            </div>
        </div>
    </div>
  )
}
// className='border-4'
export default Box4