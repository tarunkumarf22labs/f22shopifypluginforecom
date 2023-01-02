import FormComponet from "../FormComponet/FormComponet";
import SliderParent from "../Slider/SliderParent";
import { Apitype } from "../../types";
function PluginContent({ count }: { count: Apitype }) {
  return (
    <>
      <div className="relatives ">
        <div className="form-container">
          <FormComponet />
        </div>
        <SliderParent count={count} />
      </div>
    </>
  );
}

export default PluginContent;
