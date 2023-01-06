import Preact from "preact";
import { StateUpdater, useState } from "preact/hooks";

function FormComponet({
  OnChange,
  first,
  setcmpform,
  handleCount,
}: {
  OnChange: (e: Preact.JSX.TargetedEvent<HTMLSelectElement, Event>) => void;
  first: { name: string; size: string; color: string };
  setcmpform: StateUpdater<boolean>;
  handleCount: () => void;
}) {
  const [touched, settouched] = useState<boolean>(false);

  const [error, seterror] = useState<string[]>([
    "atleast select one name ",
    "atleast select one  size ",
    "atleast select one  color",
  ]);

  function onSubmit(e: Preact.JSX.TargetedEvent<HTMLFormElement, Event>) {
    e.preventDefault();
    if (first.color === "" || first.name === "" || first.size === "") {
      settouched(true);
      console.log("sahi");

      return;
    }
    setcmpform(true);
    handleCount();
  }

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h4>Waist Size (in cm)</h4>
        <select
          className={`${
            touched && first.name === ""
              ? "plugin-select selecterror"
              : "plugin-select "
          }   `}
          name="name"
          id="name"
          onInput={(e) => OnChange(e)}
        >
          <option _ngcontent-dss-c150="" selected={true} disabled={true}>
            Select
          </option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        {touched && first.name === "" ? (
          <h4 className="error">{error[0]}</h4>
        ) : (
          ""
        )}

        <h4>Chest Size (in cm)</h4>
        <select
          name="size"
          id="size"
          onInput={(e: Preact.JSX.TargetedEvent<HTMLSelectElement, Event>) =>
            OnChange(e)
          }
          className={`${
            touched && first.size === ""
              ? "plugin-select  selecterror"
              : "plugin-select "
          }   `}
        >
          <option _ngcontent-dss-c150="" selected={true} disabled={true}>
            Select
          </option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        {touched && first.size === "" ? (
          <h4 className="error">{error[1]}</h4>
        ) : (
          ""
        )}

        <h4>Hip Size (in cm)</h4>
        <select
          className={`${
            touched && first.color === ""
              ? "selecterror plugin-select"
              : "plugin-select"
          }   `}
          name="color"
          id="color"
          onInput={(e) => OnChange(e)}
        >
          <option _ngcontent-dss-c150="" selected={true} disabled={true}>
            Select
          </option>
          <option value="pink">pink</option>
          <option value="orange">orange</option>
          <option value="gauva">gauva</option>
          <option value="leonade">lemonade</option>
          <option value="pink">pink</option>
          <option value="orange">orange</option>
          <option value="gauva">gauva</option>
          <option value="leonade">lemonade</option>
          <option value="pink">pink</option>
          <option value="orange">orange</option>
          <option value="gauva">gauva</option>
          <option value="leonade">lemonade</option>
        </select>
        {touched && first.color === "" ? (
          <h4 className="error">{error[2]}</h4>
        ) : (
          ""
        )}
        <button className="form-submitbtn">click me </button>
      </form>
    </div>
  );
}

export default FormComponet;
