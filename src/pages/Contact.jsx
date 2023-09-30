import './css/contact.css'
export default function Contact() {
    return (
        <>
            <div className="my-4">
                <h3 className="text-center">Contact Us</h3>
                <div className="d-flex flex-lg-column mx-5 p-5">
                    {/* Contact Info here */}
                    <div className="d-flex flex-column">
                        <div className='red-head'>Jaypee Institute of Information Technology</div>
                        <div> <b>

                            A-10, Sector - 62, Noida, Uttar Pradesh, India -
                            201309
                        </b>
                        </div>
                        <hr />
                        <div className='red-head'>Address your communications to</div>
                        <div>
                          <b>
                          Prof. Alka Tripathi
                          </b> 
                             (Conference Chair) <br />
                            Head, Department of Mathematics
                        </div>
                        <div className="d-flex">
                            <div>
                              <b>
                              Dr. Yogesh Gupta
                              </b> (Convener) <br />
                                Department of Mathematics
                            </div>
                            <div className="mx-5">
                              <b>Dr. Lakhveer Kaur</b>
                                 (Convener) <br />
                                Department of Mathematics
                            </div>
                        </div>
                        <br />
                        <div>
                            Mobile: +91 9953891505, +91 9899273989 <br />
                            <b>Email: ramsaconference.jiit@gmail.com</b>
                        </div>
                        <hr />
                        <div className='red-head'>How to reach</div>
                        <div>
                          <b>Metro</b></div>
                        <div className="overflow-auto">
                            The nearest metro station is NOIDA ELECTRONIC CITY.
                            The institute is situated at a walking distance from
                            the metro station.
                        </div>
                        <div>
                          <b>Railway</b></div>
                        <div>
                            Noida is well connected to the New Delhi, Old Delhi
                            and Ghaziabad railway stations by bus. Cabs can be
                            hired just outside the railway stations.
                        </div>
                        <div>
                          <b>Airport</b></div>
                        <div>
                            Cabs can be hired just outside the airport terminal
                            for JIIT Sector‐62, Noida.
                        </div>
                    </div>
                    {/* Map here */}
                    
                </div>
            </div>
        </>
    );
}
