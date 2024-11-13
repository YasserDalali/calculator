import React, { useEffect } from "react";
import CalButton from "./CalButton";
import { useState } from "react";

export default function Pad({ getPad }) {
  const [first, setFirst] = useState(""); // Changed to an empty string for more intuitive input.

  const handleInput = (e) => {
    const value = e.target.innerHTML;

    if (value === "RESET") {
      setFirst(""); // Reset the input field to an empty string.
      return;
    } else if (value === ".") {
      if (!first.includes(".")) setFirst(first + value); // Concatenate the decimal point.
      else console.log("There's already a decimal point.");
    } else if (value === "=") {
      try {
        setFirst([(String(Math.round(eval(first)*100)/100))]); // Calculate the result (Use cautiously).
      } catch (error) {
        console.log(typeof(first))
        console.log(first)
        console.error("Invalid expression");
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (["+", "-", "*", "/"].some(op => first.includes(op))) {
        console.log("Already specified an operation.");
      } else {
        setFirst(first + value); // Concatenate the operator.
      }
    } else {
      setFirst(first + value); // Concatenate the number.
    }
  };

  // Effect to send updated value to the parent
  useEffect(() => {
    getPad(first); console.log(first) // Send the current expression to the parent
  }, [first, getPad]); // Trigger when `first` changes

  return (
    <main className="flex gap-5">
      <CalButton value={"RESET"} bgcol={"bg-red-500"} onClick={handleInput}>
        RESET
      </CalButton>

      <article className="flex gap-5">
        <section className="grid grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((button, key) => (
            <CalButton key={key} value={button} onClick={handleInput}>
              {button}
            </CalButton>
          ))}
          <CalButton bgcol={"bg-red-400"} onClick={handleInput}>
            =
          </CalButton>
        </section>

        <aside className="grid grid-cols-1 gap-5">
          {["+", "-", "*", "/"].map((button, key) => (
            <CalButton key={key} value={button} bgcol={"bg-red-300"} onClick={handleInput}>
              {button}
            </CalButton>
          ))}
        </aside>
      </article>
    </main>
  );
}
