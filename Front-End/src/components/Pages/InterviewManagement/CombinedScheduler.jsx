import React, { useState, useCallback, useEffect } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import {
  format,
  parse,
  startOfWeek,
  getDay,
  format as formatDate,
} from "date-fns";
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
  const [selectedEvent, setSelectedEvent] = useState(null);

  const colors = ["#00f", "#f00", "#0f0", "#ff0", "#f0f", "#0ff"];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const parsedEvents = savedEvents.map((event) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
    setEvents(parsedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleDateClick = useCallback((date) => {
    setSelectedDate(date);
    setSchedulerView("day");
  }, []);

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.start || !newEvent.end) {
      alert("Please fill out all fields");
      return;
    }

    const eventStart = new Date(newEvent.start);
    const eventEnd = new Date(newEvent.end);

    setEvents((prevEvents) => [
      ...prevEvents,
      {
        title: newEvent.title,
        start: eventStart,
        end: eventEnd,
        color: getRandomColor(),
      },
    ]);
    setNewEvent({ title: "", start: "", end: "" });
  };

  const handleSelectEvent = useCallback((event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  }, []);

  const handleCloseEventModal = () => {
    setSelectedEvent(null);
    setModalIsOpen(false);
  };

  const handleDeleteEvent = () => {
    setEvents((prevEvents) =>
      prevEvents.filter(
        (event) =>
          event.start.toString() !== selectedEvent.start.toString() ||
          event.end.toString() !== selectedEvent.end.toString(),
      ),
    );
    handleCloseEventModal();
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

  const formatTimeRange = (start, end) => {
    const startTime = formatDate(new Date(start), "h:mma");
    const endTime = formatDate(new Date(end), "h:mma");
    return `${startTime}-${endTime}`;
  };

  return (
    <div className="scheduler-container bg-white pt-3 flex">
      <div className="flex-1">
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
              start: slotInfo.start.toISOString().slice(0, 16),
              end: slotInfo.end.toISOString().slice(0, 16),
            });
            setModalIsOpen(true);
          }}
          onSelectEvent={handleSelectEvent}
          eventPropGetter={eventPropGetter}
          onNavigate={(date) => setSelectedDate(date)}
          onView={(view) => setSchedulerView(view)}
        />

        <div className="event-form mt-12 ml-2 p-4 border-t bg-sky-100">
          <h2 className="text-2xl  font-semibold mb-2">Add Event</h2>
          <form>
            <div className="mb-2">
              <label className="block mb-1 text-xl  mt-5">Title</label>
              <input
                type="text"
                placeholder="Enter title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1 text-xl  mt-5">
                Start Date & Time
              </label>
              <input
                type="datetime-local"
                placeholder="start date & time"
                value={newEvent.start}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    start: e.target.value,
                  })
                }
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1 text-xl mt-5">End Date & Time</label>
              <input
                type="datetime-local"
                value={newEvent.end}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    end: e.target.value,
                  })
                }
                className="border p-2 w-full"
              />
            </div>
            <button
              type="button"
              onClick={handleAddEvent}
              className="bg-blue-500 text-white py-2 px-4 mt-8 ml-2 text-xl rounded"
            >
              Add Event
            </button>
          </form>
        </div>
      </div>

      {selectedEvent && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseEventModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2 className="mt-2 text-2xl text-center font-semibold">
            Event Details
          </h2>
          <p className="mt-2 text-lg">
            <strong>Title:</strong> {selectedEvent.title}
          </p>
          <p className="mt-2 text-lg">
            <strong>Start:</strong>{" "}
            {new Intl.DateTimeFormat("en-US").format(
              new Date(selectedEvent.start),
            )}
          </p>
          <p className="mt-2 text-lg">
            <strong>End:</strong>{" "}
            {new Intl.DateTimeFormat("en-US").format(
              new Date(selectedEvent.end),
            )}
          </p>
          <p className="mt-2 text-lg">
            <strong>Time:</strong>{" "}
            {formatTimeRange(selectedEvent.start, selectedEvent.end)}
          </p>
          <button
            onClick={handleDeleteEvent}
            className="bg-red-500 text-white py-2 px-4 mr-3 rounded mt-4"
          >
            Delete Event
          </button>
          <button
            onClick={handleCloseEventModal}
            className="bg-gray-500 text-white py-2 px-4 rounded mt-4"
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

export default CombinedScheduler;
