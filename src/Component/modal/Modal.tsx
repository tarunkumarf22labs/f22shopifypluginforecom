import crossicon from "../../assets/cross.webp";

function Modal({
  children,
  onClick,
}: {
  children: preact.ComponentChildren;
  onClick: () => void;
}) {
  return (
    <div className="modal" onClick={onClick}>
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <div className="modal-card">
          <div className="childrena">
            <div className="icon-holder" onClick={onClick}>
              <div className="cross">
                <div className="icon-Close">
                  <img src={crossicon} alt="" />
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
