function Modalslider() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(arr.slice(arr.length / 2), arr);

  return (
    <div>
      <div className="modal-slider">
        <ChildSlider />
        <ChildSlider />
      </div>
    </div>
  );
}

function ChildSlider() {

  return <div>sdfgsdf</div>;
}

export default Modalslider;
