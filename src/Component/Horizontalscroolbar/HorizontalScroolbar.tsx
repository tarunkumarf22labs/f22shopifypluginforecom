import { useState } from "preact/hooks";
import { JSXInternal } from "preact/src/jsx";

function HorizontalScroolbar({ resetdelete }: { resetdelete: () => void }) {
  const slides = [
    {
      name: "pink",
    },
    {
      name: "black",
    },
    {
      name: "red",
    },
    {
      name: "orange",
    },
    {
      name: "pink/orange",
    },

    {
      name: "skim/blue",
    },
    {
      name: "skim/blue",
    },
    {
      name: "skim/blue",
    },
  ];

  function handleSlidelift() {
    let slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider?.scrollLeft + 500;
    }
  }

  // function handlerect(e: JSXInternal.TargetedMouseEvent<HTMLDivElement>) {
  //   let s = e.target as HTMLDivElement;
  //   getCordinates(s.getBoundingClientRect());
  // }

  function handleSlideright() {
    let slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider?.scrollLeft - 500;
    }
  }

  const [first, setfirst] = useState(true);

  return (
    <div className="grand-parent">
      <div className="slider-parent">
        <div className="" style={{ textAlign: "right" }}>
          <button onClick={resetdelete}>cross</button>
        </div>
        <div className="" style={{ textAlign: "right" }}>
          <button onClick={() => setfirst(!first)}>Expand</button>
        </div>
        <div
          className={
            first ? `main-slider-container` : `main-slider-container increase`
          }
        >
          {first ? (
            <>
              <div className="slider-icon left " onClick={handleSlideright}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9998 20.67C14.8098 20.67 14.6198 20.6 14.4698 20.45L7.94979 13.93C6.88979 12.87 6.88979 11.13 7.94979 10.07L14.4698 3.55C14.7598 3.26 15.2398 3.26 15.5298 3.55C15.8198 3.84 15.8198 4.32 15.5298 4.61L9.00979 11.13C8.52979 11.61 8.52979 12.39 9.00979 12.87L15.5298 19.39C15.8198 19.68 15.8198 20.16 15.5298 20.45C15.3798 20.59 15.1898 20.67 14.9998 20.67Z"
                    fill="#292D32"
                  />
                </svg>
              </div>
              <div id="slider">
                {slides.map((e) => {
                  return (
                    <>
                      <div className="slider-card">{e.name}</div>
                    </>
                  );
                })}
              </div>
              <div className="slider-icon right" onClick={handleSlidelift}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61C8.0901 4.32 8.0901 3.84 8.3801 3.55C8.6701 3.26 9.1501 3.26 9.4401 3.55L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z"
                    fill="#292D32"
                  />
                </svg>
              </div>
            </>
          ) : (
            <div className="slider-grid">
              {slides.map((e) => {
                return (
                  <>
                    <div className="slider-card   slider-card-w">
                      <div>{e.name}</div>
                    </div>{" "}
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroolbar;
