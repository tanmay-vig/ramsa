import '../pages/App.css';
import Box1 from '../components/Box1';
import Box2 from '../components/Box2';
import Box3 from '../components/Box3';
import Box4 from '../components/Box4';
import Box5 from '../components/Box5';

function Organizers() {
  return (
    <div className='mainstyle'>
      <br />
      <h2 style={{fontSize: "52px", color:"blue"}}>ORGANIZERS</h2>
      <div className='style'>
        <Box1 post = "CHIEF PATRONS" name1= "Shri Jaiprakash Gaur Ji," position1 = "Founder Chancellor, JIIT" name2 = "Shri Manoj Gaur Ji," position2 = "Executive Chairman, Jaypee Group"/>
        <Box1 post = "PATRONS" name1= "Prof. S. C. Saxena," position1 = "Pro Chancellor, JIIT" name2 = "Prof. B. R. Mehta," position2 = "Vice Chancellor, JIIT"/>
      </div>
      <br /><br />
      <Box2 post = "CONFERENCE CHAIR" name1= "Prof. Alka Tripathi," position1 = "Pro Chancellor, JIIT"/>
      <Box2 post = "CONVENERS" name1= "Dr. Pankaj K. Srivastava & Dr. Dinesh C. S. Bisht" position1 = "Associate Professor(s)"/>
      <br />
      <br />
      <div className='style'>
        <div style={{marginRight:"50px"}}>
          <Box3 post = "TRACK MANAGEMENT CHAIR" name1= "Dr. Pato Kumari" position1 = "Associate Professor"/>
          <Box3 post = "FINANCE CHAIR" name1= "Dr. Anuj Bhardwaj" position1 = "Associate Professor"/>
          <Box3 post = "PUBLICITY & BROADCAST CHAIR" name1= "Dr. Amita Bhagat" position1 = "Associate Professor"/>
        </div>
        <div style={{marginLeft:"50px"}}>
          <Box3 post = "PUBLICATION CHAIR" name1= "Dr. Yogesh Gupta" position1 = "Associate Professor"/>
          <Box3 post = "HOSPITALITY CHAIR" name1= "Dr.  Himanshu Agarwal" position1 = "Associate Professor"/>
          <Box3 post = "REGISTRATION CHAIR" name1= "Dr. Richa Sharma" position1 = "Associate Professor"/>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='style'>
        <Box4 />
      </div>
      <br />
      <br />
      <Box5 />
      <br />
    </div>
  );
}

export default Organizers;
