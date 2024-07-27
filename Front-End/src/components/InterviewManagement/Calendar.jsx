import React from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import SchedulerComponent from "./SchedulerComponent";
import CalendarSidebar from "./CombinedScheduler";
import CombinedScheduler from "./CombinedScheduler";

function Calendar() {
  return (
    <>
      <div className="flex">
        <HomeLayout />
        <section className="relative left-80 top-20 ">
          <div>
            <h1 className="font-bold text-3xl mt-14">Calendar Schedule</h1>
          </div>
          <div className="mt-10">
            <CombinedScheduler />
          </div>
        </section>
      </div>
    </>
  );
}

export default Calendar;

{
  /* <div>
  <CalendarSidebar />
</div>
<div className="relative left-72 top-24">
  <SchedulerComponent />
</div> */
}
