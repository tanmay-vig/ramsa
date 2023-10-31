import Table from "react-bootstrap/Table";
import "./css/registration.css";
import qr from "../img/qr.png";
export default function Registration() {
    return (
        <section>
            <h2 className="text-center my-3 red text-bold">Registrations</h2>
            {/* Registration Charges */}
            <h3 className="red">Registration Charges :</h3>
            <Table bordered hover responsive>
                <thead>
                    <tr>
                        <th rowSpan={2}>Category</th>
                        <th rowSpan={2}>Mode</th>
                        <th colSpan={2}>Registration Charges (RAMSA-2024)</th>
                    </tr>
                    <tr>
                        <th>Abroad</th>
                        <th>India</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={2}>Academicians/Scientists</td>
                        <td>Offline</td>
                        <td>$ 250</td>
                        <td>₹ 5000/- </td>
                    </tr>
                    <tr>
                        <td>Online</td>
                        <td>$ 150</td>
                        <td>₹ 3000/- </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>Research Scholars</td>
                        <td>Offline</td>
                        <td>$ 150</td>
                        <td>₹ 3000/- </td>
                    </tr>
                    <tr>
                        <td>Online</td>
                        <td>$ 75</td>
                        <td>₹ 1500/- </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>JIIT Students/JIIT Alumni</td>
                        <td>Offline</td>
                        <td>$ 100</td>
                        <td>₹ 2000/- </td>
                    </tr>
                    <tr>
                        <td>Online</td>
                        <td>$ 75</td>
                        <td>₹ 1500/- </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>Attendee</td>
                        <td>Offline</td>
                        <td>$ 100</td>
                        <td>₹ 2000/- </td>
                    </tr>
                    <tr>
                        <td>Online</td>
                        <td>$ 50</td>
                        <td>₹ 1000/- </td>
                    </tr>
                    <tr>
                        <td>Extra Per Article Submission</td>
                        <td>Offline/Online</td>
                        <td>$ 50</td>
                        <td>₹ 1000/- </td>
                    </tr>
                </tbody>
            </Table>
            {/* Payment Mode */}
            <div>
                <h3 className="red">Payment Mode: </h3>
                <h5 className="red">Indian Participant: </h5>
                The participant/author can pay the registration fee using the
                following link or QR code:
                <br /> <br />
                <div>
                    <img src={qr} alt="Qr" className="qr" />
                </div>{" "}
                <br />
                <a
                    href="https://payments.cashfree.com/forms/RAMSA"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="btn btn-success">Payment Link</button>
                </a>{" "}
                <br /> <br />
            </div>
            {/* Wire Transfer */}
            <h5 className="red">Participants from Outside India:</h5>
            <div>
                <span className="red">Wire Transfer : </span> The
                participant/author can pay the registration fee through wire
                transfer. The wire transfer may be made to the following bank:
            </div>{" "}
            <br />
            <Table bordered hover responsive>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            Correspondent Bank Name, Address and Swift Code of
                            the Correspondent Bank (Field 56A of Swift)
                        </td>
                        <td>
                            CITI BANK NEW YORK, USA, SWIFT CODE: CITIUS33XXX
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            Swift Code & Account No. of IDBI Bank with
                            Correspondence Bank (Field 57A of Swift)
                        </td>
                        <td>
                            SWIFT CODE: IBKLINBBA83 Pacific Business Park, 1st
                            Floor, Plot No. 37/1, Dr. Burman Marg, Sahibabad
                            (U.P), Ghaziabad – 201010
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Beneficiary Details (Field 59 of Swift)</td>
                        <td>
                            Jaypee Institute of Information Technology, Account
                            No.: 0200104000323550 (IDBI Bank Ltd, Sector-63,
                            Noida, U.P., India)
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Purpose (Field 70 of Swift)</td>
                        <td>
                            Educational Fees (Mention Student’s name, Father`s
                            name and Remitter’s name )
                        </td>
                    </tr>
                </tbody>
            </Table>
            {/* Note */}
            <div>
                <div className="red">
                    <b>Note:</b>
                </div>
                <ol>
                    <li>
                        {" "}
                        Swift Copy (Wire transfer advice/MT103) should be sent
                        by email at fees@jiit.ac.in with a copy to :
                        ramsa.conference2024@gmail.com for information of the
                        Institute.
                    </li>
                    <li>
                        All bank charges in foreign and in India, in connection
                        with the remittance will be charged to the account of
                        the Remitter. Any shortage in the prescribed fees
                        amount, on account of bank charges credited to the
                        Institute’s A/c shall be borne by the remitter.
                    </li>
                </ol>
            </div>
            {/* Registration Process and Important points */}
            <div>
                <h3 className="red">
                    Registration Process and some important points:
                </h3>
                <ul>
                    <li>
                        Upon abstract acceptance, the corresponding author will
                        receive an acceptance email from the conveners.
                    </li>
                    <li>
                        After receiving acceptance of abstract, the author needs
                        to pay the fee as per category.
                    </li>
                    <li>
                        After successfully making the payment, authors must
                        complete the mandatory online registration by clicking
                        the following link : <br /> <br />
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfxzKQZQCeBCLBigQ3GSpH2o3OU0bwAxgTaTZhCr37U-IBJ5g/viewform?usp=sf_link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="btn btn-success">
                                Link for Registration
                            </button>
                        </a>
                    </li>{" "}
                    <br />
                    <li>
                        Please have the following documents ready for online
                        registration: <br />
                        <ol>
                            <li>
                                For NEFT: Scanned copy of the bank receipt or
                                Funds transfer advice. For Wire Transfer: Swift
                                Copy (Wire transfer advice MT103) For Credit
                                Card Payment: Generated transaction receipt.
                            </li>
                            <li>
                                If you fall into the categories of Research
                                Scholar, current JIIT Student, or JIIT Alumni,
                                please remember to submit the necessary
                                documentation during registration. Research
                                Scholars and current JIIT students should
                                include a copy of their identity card, while
                                JIIT Alumni should provide a copy of their
                                degree certificate.
                            </li>
                        </ol>
                    </li>
                    <li>Registration needs to be done for each submission.</li>
                    <li>
                        Registration fees for the Offline Mode cover a
                        conference kit, lunch, and tea during the event.
                        Participants are responsible for arranging their own
                        accommodation.
                    </li>
                    <li>
                        A paper must be presented by a registered participant.
                        Certificates will be issued in the name of the
                        registered participant upon successful paper
                        presentation at the conference.
                    </li>
                    <li>
                        Registration fees are non-refundable; refund requests
                        will not be entertained.
                    </li>
                    <li>
                        Only accepted and presented papers, following peer
                        review, will be considered for publication. The specific
                        publication venues, including journals, books, or
                        proceedings, are currently under consideration and will
                        be communicated in due course
                    </li>
                    <li>
                        Acceptance for conference presentation does not
                        guarantee paper publication. High-quality research
                        papers will be considered for publication after the peer
                        review process, following the publisher's or journal's
                        policy.
                    </li>
                    <li>
                        Publication charges (if applicable) for accepted
                        full-length papers will be determined by the publisher
                        or journal at the time of acceptance.
                    </li>
                </ul>{" "}
                <br />
                For any questions or assistance, contact us at:
                <span className="text-info">
                    <b> ramsa.conference2024@gmail.com</b>
                </span>
            </div>
        </section>
    );
}
