function VerticalSlider() {
  //   setTimeout(() => {
  //     return <h1>loading...</h1>;
  //   }, 2000);
  //   if (true) {
  //     return (
  //       <div className=" modalsliderparent centering">
  //         <div class="loader"></div>
  //       </div>
  //     );
  //   }

  return (
    <div className="modal-slider">
      <VerticalSliderchildren />
    </div>
  );
}

function VerticalSliderchildren() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="modalsliderparent">
      {arr.map((e) => {
        return (
          <div className="SliderChildren">
            <a href={`/${e}`} target="_blank">
              {e}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default VerticalSlider;
