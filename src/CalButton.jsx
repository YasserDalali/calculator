import { useState } from "react";

export default function CalButton({ children: child, bgcol, onClick }) {

  bgcol = bgcol || "bg-gray-100";

  return (
    <button
      onClick={onClick}
      className={`p-10  ${bgcol} w-full font-mono font-semibold rounded-xl max-w-40 flex items-center justify-center text-3xl`}
      >
      {child}
    </button>
  );
}
