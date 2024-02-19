import { useState } from "react";

function App() {
  const [btnColor, setBtnColor] = useState("red");

  const nextColor = btnColor === "red" ? "blue" : "red";

  return (
    <div>
      <button className={btnColor} onClick={() => setBtnColor(nextColor)}>
        change to {nextColor}
      </button>
      <br />
      <input type="checkbox" id="button-status-manage" defaultChecked={false} />
      <label htmlFor="button-status-manage">Disable button</label>
    </div>
  );
}

export default App;
