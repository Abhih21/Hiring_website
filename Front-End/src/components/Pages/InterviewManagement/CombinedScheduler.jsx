import React, { useState, useCallback } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "react-modal";
import "./SchedulerComponent.css";

Modal.setAppElement("#root");

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: {
    "en-US": enUS,
  },
});

const CombinedScheduler = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [schedulerView, setSchedulerView] = useState("month");
  const [eventColors] = useState(["#f00", "#0f0", "#00f", "#ff0", "#0ff"]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateClick = useCallback((date) => {
    setSelectedDate(date);
    setSchedulerView("day");
  }, []);

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
        color: eventColors[events.length % eventColors.length],
      },
    ]);
    setModalIsOpen(false);
    setNewEvent({ title: "", start: "", end: "" });
  }, [events, newEvent, eventColors]);

  const handleSelectEvent = useCallback((event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  }, []);

  const handleCloseEventModal = () => {
    setSelectedEvent(null);
    setModalIsOpen(false);
  };

  const eventPropGetter = (event) => ({
    style: {
      backgroundColor: event.color,
      color: "#fff",
    },
  });

  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0,
  ).getDate();

  return (
    <div className="scheduler-container">
      {/* Sidebar */}
      <div className="sidebar w-72 bg-white shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            {selectedDate.toLocaleString("default", { month: "long" })}{" "}
            <span className="text-blue-500">{selectedDate.getFullYear()}</span>
          </h2>
          <button className="text-xl font-semibold">+</button>
        </div>
        <div className="grid grid-cols-7 text-center text-xs mb-4">
          <div>SUN</div>
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
          {[...Array(daysInMonth)].map((_, index) => (
            <div
              key={index}
              className={`p-1 cursor-pointer ${
                index + 1 === selectedDate.getDate()
                  ? "bg-yellow-300 rounded-full"
                  : ""
              }`}
              onClick={() =>
                handleDateClick(
                  new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth(),
                    index + 1,
                  ),
                )
              }
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Scheduler */}
      <div className="flex-1 ">
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700, width: "99%" }}
          views={["day", "week", "month"]}
          view={schedulerView}
          defaultView="month"
          selectable
          onSelectSlot={(slotInfo) => {
            setNewEvent({
              ...newEvent,
              start: slotInfo.start,
              end: slotInfo.end,
            });
            setModalIsOpen(true);
          }}
          onSelectEvent={handleSelectEvent}
          eventPropGetter={eventPropGetter}
          onNavigate={(date) => setSelectedDate(date)}
          onView={(view) => setSchedulerView(view)}
        />
        <button
          className="add-event-button"
          onClick={() => setModalIsOpen(true)}
        >
          Add Event
        </button>
      </div>

      {/* Event description modal */}
      {selectedEvent && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseEventModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2>Event Details</h2>
          <p>
            <strong>Title:</strong> {selectedEvent.title}
          </p>
          <p>
            <strong>Start:</strong>{" "}
            {new Intl.DateTimeFormat("en-US").format(
              new Date(selectedEvent.start),
            )}
          </p>
          <p>
            <strong>End:</strong>{" "}
            {new Intl.DateTimeFormat("en-US").format(
              new Date(selectedEvent.end),
            )}
          </p>
          <button onClick={handleCloseEventModal}>Close</button>
        </Modal>
      )}

      {/* Add Event Modal */}
      <Modal
        isOpen={modalIsOpen && !selectedEvent}
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

export default CombinedScheduler;
