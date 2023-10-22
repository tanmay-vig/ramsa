// import "./css/style.css";
import { Link } from "react-router-dom";
import "./css/about.css";
export default function About() {
    return (
        <>
            <h2 className="text-center my-3">About Us</h2>
            <div className="d-flex flex-column flex-lg-row justify-content-center p-5">
                <div className="mx-2">
                    <div className="red-head text-center">
                        About the host Institution and Department{" "}
                    </div>
                    <hr />
                    <div>
                        The Jaypee Institute of Information Technology (JIIT), a
                        deemed-to-be University under the UGC Act 1956, stands
                        as the gracious host for the 7th International
                        Conference on Recent Advances in Mathematical Sciences
                        and its Applications (RAMSA-2024). Located in Noida, in
                        close proximity to the Electronic City and just 3
                        kilometres from the New Delhi-UP border, JIIT is
                        dedicated to becoming a global centre of excellence in
                        information technology and related fields. Supported by
                        the Jaypee Group through Jaiprakash Sewa Sansthan (JSS),
                        JIIT offers a wide spectrum of academic programs,
                        including Doctoral, Post Graduate, and Undergraduate
                        programs in Engineering, Sciences, and Management.
                    </div>
                    <div>
                        The Jaypee Institute of Information Technology (JIIT), a
                        deemed-to-be University under the UGC Act 1956, stands
                        as the gracious host for the 7th International
                        Conference on Recent Advances in Mathematical Sciences
                        and its Applications (RAMSA-2024). Located in Noida, in
                        close proximity to the Electronic City and just 3
                        kilometres from the New Delhi-UP border, JIIT is
                        dedicated to becoming a global centre of excellence in
                        information technology and related fields. Supported by
                        the Jaypee Group through Jaiprakash Sewa Sansthan (JSS),
                        JIIT offers a wide spectrum of academic programs,
                        including Doctoral, Post Graduate, and Undergraduate
                        programs in Engineering, Sciences, and Management.
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="d-flex justify-content-center w-100 mt-5">
                        <Link to='/previous'>
                        <button className="btn btn-success">
                            Previous editions of RAMSA{" "}
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="d-flex justify-content-center w-100 mt-5">
                        <a href="" download="">
                            <button className="btn btn-success">
                                
                                Download Brochure for RAMSA 2024
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}
