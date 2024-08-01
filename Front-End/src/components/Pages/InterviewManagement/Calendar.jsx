import React from "react";
import HomeLayout from "../../../Layouts/HomeLayout";
import CombinedScheduler from "./CombinedScheduler.jsx";

function Calendar() {
  return (
    <>
      <HomeLayout>
        {" "}
        <section className="">
          <div>
            <h1 className="font-bold text-3xl mt-4">Calendar Schedule</h1>
          </div>
          <div className="mt-5">
            <CombinedScheduler />
          </div>
        </section>
      </HomeLayout>
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
