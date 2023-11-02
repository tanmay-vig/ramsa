import React from 'react'

function Part3() {
    const style = {
        padding: "10px 40px"
    }
  return (
    <div style={style}>
        <h2 style={{color: "red"}}>Presentation Requirements:</h2>
        <div>A paper must be presented by a registered participant in person or virtually, in front of an expert panel, during the conference on the scheduled dates. More information about the presentation guidelines and further processes will be provided by the organizing team periodically.</div>
        <br />
        <h2 style={{color: "red"}}>Ethical Standards and Plagiarism Policy: </h2>
        <div>All submissions to RAMSA 2024 will undergo plagiarism checks using anti-plagiarism software. Authors are expected to uphold the highest standards of publication ethics. Any form of unethical behaviour, such as data falsification, fabrication, plagiarism (including self-plagiarism without proper citation), or misappropriation of work, is strictly prohibited.</div>
        <br />
        <h2 style={{color: "red"}}>Publication Opportunities: </h2>
        <ul style={{textAlign:"justify"}}>
            <div><li>Accepted and presented papers will undergo peer review and be considered for publication. </li></div>
            <div><li>The specific publication venues, including journals, books, or proceedings, are currently under consideration and will be communicated in due course.</li></div>
            <div><li>Acceptance for conference presentation does not guarantee paper publication. High-quality research papers will be considered for publication after the peer review process, following the publisher's or journal's policy. The final decision on acceptance/rejection of the manuscript will be on the basis of reviewer's and editor's recommendation.</li></div>
            <div><li>Publication charges (if applicable) for accepted full-length papers will be determined by the publisher or journal at the time of acceptance.</li></div>
        </ul>
        <br />
    </div>
  )
}

export default Part3