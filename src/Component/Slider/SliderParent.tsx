// @ts-nocheck
import { useState } from "preact/hooks";
import Slider from "react-slick";
import SliderChildren from "./SliderChildren";
function SliderParent({ count }) {
  const [first, setfirst] = useState(false);
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="boxer">
        <Slider {...settings}>
          {count.map((e) => {
            return (
              <SliderChildren data={e} setfirst={setfirst} first={first} />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SliderParent;
