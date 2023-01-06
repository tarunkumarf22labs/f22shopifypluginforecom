import crossicon from "../../assets/cross.webp";

function Modal({
  children,
  onClick,
  count
}: {
  children: preact.ComponentChildren;
  onClick: () => void;
  count : number
}) {
  return (
    <div className="modal" onClick={onClick}>
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <div className="modal-card">
          <div className="modal-card-wrap">
            <div className="icon-holder-parent">
              <h3>
                {" "}
                {count === 0
                  ? "Add Measurements"
                  : "Available Products for you"}
              </h3>
              <div className="icon-holder" onClick={onClick}>
                <div className="cross">
                  <div className="icon-Close">
                    {/* <img src={crossicon} alt="" /> */}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11L11 1"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11 11L1 1"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
