import React, {useEffect, useState} from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

export default function Animate({code, language}) {
  const [index, setIndex] = useState(0);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    if (index === code.length) {
      return;
    }

    let delay = index === 0 ? 5000 : 40 + Math.random() * 20;
    switch (code[index]) {
      case "\n":
        delay = 400 + Math.random() * 800;
        if (index < code.length - 1 && (code[index + 1] === "}" || code[index + 1] === '\n')) {
          delay = 200;
        }
        break;
      case "{":
      case "}":
      case "(":
      case ")":
      case ">":
      case "<":
      case ":":
      case ";":
      case '"':
      case "'":
      case "[":
      case "]":
      case "+":
      case "-":
      case "=":
        delay = 100 + Math.random() * 20;
        break;
      case " ":
        delay = 0;
        break;
    }

    const codeTimeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(codeTimeout);
  }, [index, code]);

  useEffect(() => {
    const blinkerTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearTimeout(blinkerTimeout);
  }, [blink]);

  return (
    <pre>
      <code dangerouslySetInnerHTML={{__html: hljs.highlight(code.slice(0, index), {language: language}).value}}></code>
      {blink && <span style={{position: "relative", top: "0.08em"}}>|</span>}
    </pre>
  );
}
