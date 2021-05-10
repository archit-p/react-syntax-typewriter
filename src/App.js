import React from "react";
import "./style.css";
import Animate from "./Animate";
import Window from "./Window";

export default function App() {
  const code = `function greet(name) {\n  console.log("Hello " + name + ":)");\n}\n\nlet name = prompt("Enter a name: ");\n\ngreet(name);`;

  return (
    <div className="App">
      <Window>
      <div style={{minWidth: 500, minHeight: 300, padding: 20, fontSize: "1.5rem", color: "white"}}>
        <Animate code={code} language={"javascript"} />
        </div>
      </Window>
    </div>
  );
}
