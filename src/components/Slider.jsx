
import ImageSlider from "./ImageSlider";


function Slider() {
  const slides = [
    { url: "../../public/1.jpg", title: "1" },
    { url: "../../public/2.jpg", title: "2" },
    { url: "../../public/3.jpg", title: "3" },
    { url: "../../public/4.jpg", title: "4" },
    { url: "../../public/5.jpg", title: "5" },
    { url: "../../public/6.jpg", title: "6" },
    { url: "../../public/7.jpg", title: "7" },
    { url: "../../public/8.jpg", title: "8" },
    { url: "../../public/9.jpg", title: "9" },
    { url: "../../public/10.jpg", title: "10" },
    { url: "../../public/11.jpg", title: "11" },
    { url: "../../public/12.jpg", title: "12" },
    { url: "../../public/13.jpg", title: "13" },
    { url: "../../public/14.jpg", title: "14" },
    { url: "../../public/15.jpg", title: "15" },
    { url: "../../public/16.jpg", title: "16" },
    { url: "../../public/17.jpg", title: "17" },
    { url: "../../public/18.jpg", title: "18" },
    { url: "../../public/19.jpg", title: "19" },
    { url: "../../public/20.jpg", title: "20" },
    { url: "../../public/21.jpg", title: "21" },
    { url: "../../public/22.jpg", title: "22" },
    { url: "../../public/23.jpg", title: "23" },
    { url: "../../public/24.jpg", title: "24" },
  ];
  const containerStyles = {
    width: "700px",
    height: "400px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={700}/>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Slider;
