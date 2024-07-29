import React, { useState, useCallback } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "react-modal";
import "./SchedulerComponent.css";

// Set the app element for react-modal
Modal.setAppElement("#root");

// Define the localizer
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: {
    "en-US": enUS,
  },
});

const SchedulerComponent = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [eventColors] = useState(["#f00", "#0f0", "#00f", "#ff0", "#0ff"]); // Event colors

  // Handler for when a date is clicked on the scheduler
  const handleDateClick = useCallback((slotInfo) => {
    setSelectedDate(slotInfo.start); // Set the selected date
    setModalIsOpen(true); // Open modal for adding new event
  }, []);

  // Handler for adding a new event
  const handleAddEvent = useCallback(() => {
    if (!newEvent.title || !newEvent.start || !newEvent.end) {
      alert("Please fill out all fields");
      return;
    }

    const eventStart = new Date(newEvent.start);
    const eventEnd = new Date(newEvent.end);

    setEvents([
      ...events,
      {
        ...newEvent,
        start: eventStart,
        end: eventEnd,
        color: eventColors[events.length % eventColors.length], // Assign color to event
      },
    ]);
    setModalIsOpen(false);
    setNewEvent({ title: "", start: "", end: "" });
  }, [events, newEvent, eventColors]);

  // Handler for removing an event
  const handleRemoveEvent = useCallback(
    (eventToRemove) => {
      setEvents(events.filter((event) => event !== eventToRemove));
    },
    [events],
  );

  // Style events with different colors
  const eventPropGetter = (event) => ({
    style: {
      backgroundColor: event.color, // Set the background color of the event
      color: "#fff", // Ensure text is readable
    },
  });

  // Determine the view for the scheduler
  const schedulerView = "week";

  return (
    <div className="scheduler-container">
      <div className="scheduler">
        <Calendar
          localizer={localizer}
          events={events.filter(
            (event) =>
              event.start.toDateString() === selectedDate.toDateString(),
          )}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700, width: "160%" }}
          views={["day", "week", "month"]}
          view={schedulerView} // Display the appropriate view
          defaultView={schedulerView}
          selectable
          onSelectSlot={handleDateClick}
          onSelectEvent={handleDateClick}
          eventPropGetter={eventPropGetter}
        />
        <button
          className="add-event-button"
          onClick={() => setModalIsOpen(true)}
        >
          Add Event
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Add Event</h2>
        <form>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
          </div>
          <div>
            <label>Start</label>
            <input
              type="datetime-local"
              value={newEvent.start}
              onChange={(e) =>
                setNewEvent({ ...newEvent, start: e.target.value })
              }
            />
          </div>
          <div>
            <label>End</label>
            <input
              type="datetime-local"
              value={newEvent.end}
              onChange={(e) =>
                setNewEvent({ ...newEvent, end: e.target.value })
              }
            />
          </div>
          <button type="button" onClick={handleAddEvent}>
            Add Event
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default SchedulerComponent;
