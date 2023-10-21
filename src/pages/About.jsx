// import "./css/style.css";
import './css/about.css'
import pic1 from '../img/new/pic1.jpeg'
import pic2 from '../img/new/pic2.jpeg'
export default function About() {
    return (
        <>
            <h2 className="text-center my-3">About Us</h2>
            <div className="d-flex flex-column flex-lg-row justify-content-center p-5">
                <div className="mx-2">
                    <div className="red-head text-center">About JIIT</div>
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
                </div>
                <div className="mx-2">
                    <div className="red-head text-center ">
                        About the Host Department
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
                </div>
            </div>

            <div className="mx-5">
                <div className="red-head ">RAMSA 2022</div>
                <hr />
                <div>
                    The 6th International conference on Recent Advances in
                    Mathematical Sciences and its Applications (RAMSA-2022) took
                    place from December 08 to December 10, 2022, at the Jaypee
                    Institute of Information Technology, Noida. Notably,
                    RAMSA-2022 was organized as a hybrid conference, blending
                    the virtual and in-person experiences. The primary objective
                    of this conference was to facilitate the exchange of ideas
                    regarding research findings and new advances in the wide
                    area of mathematics, sciences, and engineering.The oral
                    presentations were categorized into five different tracks,
                    spanning a diverse set of themes, and featured 12
                    Plenary/Keynote speakers from various reputed
                    Institutions/Universities worldwide. RAMSA-2022 served as a
                    bridge between the global mathematical community and the
                    advancement of knowledge in this multidisciplinary field.
                </div>
                {/* Pics here */}
                <div className="d-flex justify-content-around flex-wrap">
                    <div >
                        <img src={pic1} alt="pic1" className="ramsa-2022-pics" />
                    </div>
                    <div >
                        <img src={pic2} alt="pic2"  className="ramsa-2022-pics"/>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}
