import React from 'react'
import Part1 from '../components/Part1'
import Part2 from '../components/Part2'
import Part3 from '../components/Part3'

function CallForPapers() {
  return (
    <div>
        <Part1 />
        <section>
          <a href="https://sites.google.com/view/ramsa-24-important-dates/home" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-success">Important Dates</button>
          </a>
        </section>
        {/* <Part2 name = "Important Dates:" link = "https://sites.google.com/view/ramsa-24-important-dates/home" title= "Important Dates"/> */}
        <Part2 name = "Abstract submission:" content1 = "Kindly prepare your abstract using the provided template and then submit it by uploading it through the designated submission link." link = "https://docs.google.com/forms/d/e/1FAIpQLSc60hSpo_rOoNJqeWH4v88LutV55ELbbNtpfylQmVPDGbweVg/viewform?usp=sf_link" title = "Link for Submission of abstract" content2 = "After acceptance, the abstract author has to register for the conference. Acceptance of abstracts and further details and procedure will be communicated via email."/>
        <Part3 />
    </div>
  )
}

export default CallForPapers