import FormComponet from "../FormComponet/FormComponet";
import Preact from "preact";
import { Apitype } from "../../types";
function PluginContent({
  count,
  OnChange,
}: {
  count: Apitype;
  OnChange: (e: Preact.JSX.TargetedEvent<HTMLSelectElement, Event>) => void;
}) {
  return (
    <>
      <div className="relatives ">
        <div className="form-container">
          {/* <FormComponet OnChange={OnChange} /> */}
        </div>
        {/* <SliderParent count={count} /> */}
      </div>
    </>
  );
}

export default PluginContent;
