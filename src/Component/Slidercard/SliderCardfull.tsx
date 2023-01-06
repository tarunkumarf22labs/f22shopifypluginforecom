import { useEffect, useState } from "preact/hooks";

function SliderCardfull({ data }: { data: any }) {
  if (Object.keys(data).length === 0) return <div>loading....</div>;
  return (
    <div>
      <div className="large-container">
        <div className="large-container-img">
          <img src={data?.images[0]} alt="" />
        </div>
        <div className="large-container-text">
          <h4 className="large-container-title">{data.title}</h4>
          <h4 className="large-container-price">${data.price}</h4>
          <button className="form-submitbtn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SliderCardfull;
