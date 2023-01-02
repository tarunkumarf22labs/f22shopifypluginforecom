import Preact from "preact";
import { useState } from "preact/hooks";

function FormComponet() {
  const [first, setfirst] = useState({
    name: "",
    size: "",
    color: "",
  });
  function onSubmit(e: Preact.JSX.TargetedEvent<HTMLFormElement, Event>) {
    e.preventDefault();
  }

  function OnChange(e: Preact.JSX.TargetedEvent<HTMLSelectElement, Event>) {
    const target = e.target as HTMLInputElement;
    setfirst((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  }
  console.log(first);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <select name="name" id="name" onInput={(e) => OnChange(e)}>
          <option _ngcontent-dss-c150="" selected={true} disabled={true}>
            Select name
          </option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <select
          name="size"
          id="size"
          onInput={(e: Preact.JSX.TargetedEvent<HTMLSelectElement, Event>) =>
            OnChange(e)
          }
        >
          <option _ngcontent-dss-c150="" selected={true} disabled={true}>
            Select size
          </option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>

        <select name="color" id="color" onInput={(e) => OnChange(e)}>
          <option _ngcontent-dss-c150="" selected={true} disabled={true}>
            Select color
          </option>
          <option value="pink">pink</option>
          <option value="orange">orange</option>
          <option value="gauva">gauva</option>
          <option value="leonade">lemonade</option>
        </select>
        <button>click me </button>
      </form>
    </div>
  );
}

export default FormComponet;
