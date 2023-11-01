import pic1 from "../img/jiit_logo.png";
import "./css/home.css";
import ImageSlider from '../components/ImageSlider';
import ImageSliderAuto from '../components/ImageSliderAuto';
import { ImageData } from '../json/JsonData';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="texture-background">
                <br />
                <div className="d-flex aligner ">
                    {/* For logo */}
                    <div className="  b-30">
                        <img src={pic1} alt="jiit" className="jiit-logo" />
                    </div>
                    {/* For Info */}
                    <div className=" mx-3 b-70">
                        <h3>
                            {" "}
                            <b>
                                7<sup>th</sup> International Conference on{" "}
                            </b>
                        </h3>{" "}
                        <h1 className="text-danger">
                            Recent Advances in Mathematical Sciences and its
                            Applications <br />
                            (RAMSA - 2024){" "}
                        </h1>
                        <h3>
                            {" "}
                            <b>
                                Department of Mathematics, <br />
                                Jaypee Institute of Information Technology{" "}
                                <br />
                                (JIIT Noida, U.P.)
                            </b>
                        </h3>
                        <h4 className="text-danger">
                            February 29 - March 02, 2024 (Hybrid Mode)
                        </h4>
                    </div>
                </div>
            </div>
            {/* Slider section */}
            <div className="d-none d-lg-block">
                <ImageSlider ImageData={ImageData} /><br />
                <ImageSliderAuto ImageData={ImageData} SlideInterValTime={3000} />
            </div>
        </>
    );
}
