import { useState } from "preact/hooks";

function SliderChildren({ data }: { data: any }) {
  const [first, setfirst] = useState(false);
  return (
    <div
      onMouseEnter={(e) => setfirst(true)}
      onMouseLeave={(e) => setfirst(false)}
      className={`box  ${first === true ? "box-hover" : ""}`}
    >
      <div className="sahi">
        <img src={data.image} />
        <div className={`${!first ? "box-hidden" : ""}`}>
          {first ? (
            <div>
              <h5>{data.name}</h5>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SliderChildren;
