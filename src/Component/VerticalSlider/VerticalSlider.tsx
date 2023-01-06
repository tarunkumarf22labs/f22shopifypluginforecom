import { useEffect, useState } from "preact/hooks";
import SliderCardhalf from "../Slidercard/SliderCardhalf";

function VerticalSlider({ handleSlider }: { handleSlider: () => void }) {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    async function data() {
      let val = await fetch("https://api.escuelajs.co/api/v1/products");
      let data = await val.json();
      setfirst(data);
    }
    data();
  }, []);
  //   setTimeout(() => {
  //     return <h1>loading...</h1>;
  //   }, 2000);
  //   if (true) {
  //     return (

  //     );
  //   }
  if (first.length === 0)
    return (
      <div className="modalsliderparent modalsliderparent-centering">
        <div class="loader"></div>
      </div>
    );

  return <VerticalSliderchildren val={first} handleSlider={handleSlider} />;
}

function VerticalSliderchildren({
  val,
  handleSlider,
}: {
  val: any;
  handleSlider: () => void;
}) {
  console.log(val[0]);
  return (
    <div className="modalsliderparent">
      {val?.map((e: {}) => {
        return <SliderCardhalf handleSlider={handleSlider} data={e} />;
      })}
    </div>
  );
}

export default VerticalSlider;
