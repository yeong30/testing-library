import { useEffect } from "react";
import { useState } from "react";
import ScoopsOption from "./ScoopsOption";

function Options({ optionType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadScoopOptions() {
      const response = await fetch(`http://localhost:3030/${optionType}`);
      const jsonData = await response.json();

      console.log("jsonData", jsonData);

      setItems(jsonData);
    }
    loadScoopOptions();
  }, []);

  const OptionItem = optionType === "scoops" ? ScoopsOption : null;

  return (
    <div>
      {items.map((item) => (
        <OptionItem key={item.name} name={item.name} imagePath={item.imagePath} />
      ))}
    </div>
  );
}

export default Options;
