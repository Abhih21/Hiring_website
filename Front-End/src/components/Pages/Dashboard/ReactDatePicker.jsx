import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isWeekend } from "date-fns";

function ReactDatePicker({ show, onClose, onDateChange }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDates, setSelectedDates] = useState([null, null]);
  const datePickerRef = useRef(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setSelectedDates(dates);
    if (end) {
      onDateChange(dates); // Trigger the callback to update the selected date range in the parent component
      onClose(); // Close the date picker after selecting the date range
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  return (
    show && (
      <div ref={datePickerRef} className="absolute z-10">
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          dateFormat="MM/dd/yyyy"
          filterDate={(date) => !isWeekend(date)}
          inline
        />
      </div>
    )
  );
}

export default ReactDatePicker;
