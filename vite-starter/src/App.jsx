import { useState } from "react";
import "./App.css";
import { kebabcaseToTitlecase } from "./util";

function App() {
  const [btnColor, setBtnColor] = useState("medium-violet-red");
  const [btnDisabled, setBtnDisabled] = useState(false);

  const buttonClassName = btnDisabled ? "gray" : btnColor;
  const nextColorClass = btnColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const nextColorTitleCase = kebabcaseToTitlecase(nextColorClass);

  return (
    <div>
      <button disabled={btnDisabled} className={buttonClassName} onClick={() => setBtnColor(nextColorClass)}>
        change to {nextColorTitleCase}
      </button>
      <br />
      <input onChange={(e) => setBtnDisabled(e.target.checked)} type="checkbox" id="button-status-manage" defaultChecked={btnDisabled} />
      <label htmlFor="button-status-manage">Disable button</label>
    </div>
  );
}

export default App;
