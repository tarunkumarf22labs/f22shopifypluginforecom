import Preact from "preact";
import { useState } from "preact/hooks";
import FormComponet from "./Component/FormComponet/FormComponet";
import HorizontalScroolbar from "./Component/Horizontalscroolbar/HorizontalScroolbar";
import VerticalSlider from "./Component/VerticalSlider/VerticalSlider";
import Modal from "./Component/modal/Modal";
import { Pill } from "./Component/pill/Pill";
import { useLocalstorage } from "./hooks/useLocalstorage";
import SliderCardhalf from "./Component/Slidercard/SliderCardhalf";
import SliderCardfull from "./Component/Slidercard/SliderCardfull";

export function App() {
  const [cmpform, setcmpform] = useLocalstorage("initialcmp", false);
  const [first, setfirst] = useLocalstorage("initialfirst", {
    name: "",
    size: "",
    color: "",
  });
  const [modal, setmodal] = useState<boolean>(false);
  console.log("Sahi");

  function OnChange(e: Preact.JSX.TargetedEvent<HTMLSelectElement, Event>) {
    const target = e.target as HTMLInputElement;
    setfirst((prev: any) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  }

  function handleModal() {
    setmodal((prev) => !prev);
  } 
  console.log(!cmpform);

  function resetdelete() {
    setcmpform(false);
    setfirst({ name: "", size: "", color: "" });
  }

  return (
    <>
      <div className="relative">
        {!cmpform ? (
          <Pill
            text="+"
            type="circle"
            onClick={handleModal}
            className=" bg-black "
          />
        ) : (
          ""
        )}
        {modal ? (
          <Modal onClick={handleModal}>
            {!cmpform ? (
              <FormComponet
                first={first}
                OnChange={OnChange}
                setcmpform={setcmpform}
              />
            ) : (
              <VerticalSlider />
            )}
          </Modal>
        ) : (
          ""
        )}

        {cmpform ? <HorizontalScroolbar resetdelete={resetdelete} /> : ""}
      </div>
    </>
  );
}
