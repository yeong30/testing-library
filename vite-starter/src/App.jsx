import { useState } from "react";

function App() {
  const [btnColor, setBtnColor] = useState("red");

  const nextColor = btnColor === "red" ? "blue" : "red";

  return (
    <button className={btnColor} onClick={() => setBtnColor(nextColor)}>
      change to {nextColor}
    </button>
  );
}

export default App;
