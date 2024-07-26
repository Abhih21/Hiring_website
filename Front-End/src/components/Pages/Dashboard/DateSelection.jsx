import React, { useState } from "react";

const DateSelection = ({ onSelect }) => {
  const [selected, setSelected] = useState("Today");

  const handleSelection = (selection) => {
    setSelected(selection);
    onSelect(selection);
  };

  return (
    <div className="flex px-4 space-x-2 h-15 mb-4 rounded-full bg-slate-300 py-3">
      <button
        className={`px-8 py-1  rounded-3xl ${selected === "Today" ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-700"}`}
        onClick={() => handleSelection("Today")}
      >
        Today
      </button>
      <button
        className={`px-8 py-1 rounded-3xl ${selected === "Weekly" ? "bg-blue-600 text-white" : "bg-slate-200 text-gray-700"}`}
        onClick={() => handleSelection("Weekly")}
      >
        Weekly
      </button>
      <button
        className={`px-8 py-1 rounded-3xl  ${selected === "Monthly" ? "bg-blue-600 text-white" : "bg-slate-200 text-gray-700"}`}
        onClick={() => handleSelection("Monthly")}
      >
        Monthly
      </button>
    </div>
  );
};

export default DateSelection;
