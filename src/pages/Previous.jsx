// css files
import "./css/prev.css";

// Pictures imported here
import pic1 from "../img/prevConf/2016-1.jpeg";
import pic2 from "../img/prevConf/2016-2.jpeg";
// 2017
import pic3 from "../img/prevConf/2017-1.jpeg";
import pic4 from "../img/prevConf/2017-2.jpeg";
// 2019
import pic5 from "../img/prevConf/2019-1.jpeg";
import pic6 from "../img/prevConf/2019-2.jpeg";
// 2020
import pic7 from "../img/prevConf/2020-1.jpeg";
import pic8 from "../img/prevConf/2020-2.jpeg";
// 2021
import pic9 from "../img/prevConf/2021-1.jpeg";
import pic10 from "../img/prevConf/2021-2.jpeg";
// 2022
import pic11 from "../img/prevConf/2022-1.jpeg";
import pic12 from "../img/prevConf/2022-1.jpeg";
export default function Previous() {
    return (
        <>
            <div>
                <div className="">
                    <img src={pic1} alt="2016-1" />
                    <img src={pic2} alt="2016-2" />
                </div>
            </div>
            <div>
                <div>
                    <img src={pic3} alt="2017-1" />
                    <img src={pic4} alt="2017-2" />
                </div>
            </div>
            <div>
                <div>
                    <img src={pic5} alt="2019-1" />
                    <img src={pic6} alt="2019-2" />
                </div>
            </div>
            <div>
                <div>
                    <img src={pic7} alt="2020-1" />
                    <img src={pic8} alt="2020-2" />
                </div>
            </div>
            <div>
                <div>
                    <img src={pic9} alt="2021-1" />
                    <img src={pic10} alt="2021-2" />
                </div>
            </div>
            <div>
                <div>
                    <img src={pic11} alt="2022-1" />
                    <img src={pic12} alt="2022-2" />
                </div>
            </div>
        </>
    );
}
