import React, { useState } from "react";

const App = () => {
  const [events, setEvents] = useState([]);

  const handleDateClick = (info) => {
    const title = prompt("Enter event title:");
    if (title) {
      setEvents([...events, { title, start: info.date, end: info.date }]);
    }
  };

  const handleEventClick = (info) => {
    alert(`Event: ${info.event.title}`);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 p-4">
        <SidebarCalendar />
      </div>
      <div className="w-3/4 p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Scheduler</h1>
          <button
            onClick={() => handleDateClick({ date: new Date() })}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Event
          </button>
        </div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          selectable
          dateClick={handleDateClick}
          events={events}
          eventClick={handleEventClick}
          height="600px"
        />
      </div>
    </div>
  );
};

const SidebarCalendar = () => {
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // Example for a month with 30 days

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">February 2024</h2>
      <div className="grid grid-cols-7 gap-2">
        {daysInMonth.map((day) => (
          <div
            key={day}
            className="border rounded flex items-center justify-center h-10 cursor-pointer"
          >
            {day}
          </div>
        ))}
      </div>
      <CategorySection />
    </div>
  );
};

const CategorySection = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-2">Categories</h3>
      <ul>
        <li className="mb-2">
          <span className="bg-blue-500 h-4 w-4 inline-block mr-2"></span>
          Interview Schedule
        </li>
        <li className="mb-2">
          <span className="bg-green-500 h-4 w-4 inline-block mr-2"></span>
          Internal Meeting
        </li>
        <li className="mb-2">
          <span className="bg-yellow-500 h-4 w-4 inline-block mr-2"></span>
          Team Schedule
        </li>
        <li className="mb-2">
          <span className="bg-red-500 h-4 w-4 inline-block mr-2"></span>
          My Task
        </li>
        <li className="mb-2">
          <span className="bg-purple-500 h-4 w-4 inline-block mr-2"></span>
          Reminders
        </li>
      </ul>
    </div>
  );
};

export default App;
