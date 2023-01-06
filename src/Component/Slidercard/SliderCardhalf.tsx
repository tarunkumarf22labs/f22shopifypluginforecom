// import { json } from "node:stream/consumers";
import { log } from "console";
import { useEffect, useState } from "preact/hooks";

function SliderCardhalf({
  data,
  handleSlider,
}: {
  data: any;
  handleSlider?: () => void;
}) {
  return (
    <a href={`/${data.title}`} onClick={() => handleSlider!()}>
      <div className="product-container">
        <div className="product-container-img">
          <img src={data?.images[0]} />
        </div>
        <h2>{data?.title}</h2>
      </div>
    </a>
  );
}

export default SliderCardhalf;
