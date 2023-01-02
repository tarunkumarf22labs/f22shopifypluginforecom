// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import { useEffect, useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import FormComponet from "./Component/FormComponet/FormComponet";
import Modal from "./Component/modal/Modal";
import { Pill } from "./Component/pill/Pill";
import PluginContent from "./Component/PluginContent/PluginContent";

import SliderParent from "./Component/Slider/SliderParent";

export function App() {
  const [count, setCount] = useState([]);

  async function handleasyncevent() {
    let val = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await val.json();
    console.log(data);

    setCount(data);
  }

  const [modal, setmodal] = useState<boolean>(false);

  function handleModal() {
    setmodal((prev) => !prev);
  }

  useEffect(() => {
    handleasyncevent();
  }, []);

  return (
    <>
      <div className="relative">
        <Pill
          text="+"
          type="circle"
          onClick={handleModal}
          className=" bg-black "
        />
        {modal ? (
          <Modal onClick={handleModal}>
            <PluginContent count={count} />
          </Modal>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
