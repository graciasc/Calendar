import React, { useState } from "react";

const Calendar = (props) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const handleCalendarLayout = () => {
    const rows = Math.ceil(props.days / 7);
    let startDay = 1;
    return (
      <div className="font-mono text-md p-2">
        <h1 className="grid justify-center text-lg text-purple-400">
          {props.month} {props.year}
        </h1>
        {[...Array(rows)].map((e, i) => {
          return (
            <div
              className={`grid grid-rows-${rows} text-center gap-4`}
            >
              <div className="grid grid-cols-7 gap-4 box-content border-2 divide-x ">
                {daysOfWeek.map((day) => {
                  return (
                    <div
                      style={{ width: "max-content" }}
                      className="justify-items-end items-center container grid p-4"
                    >
                      <h1 className="">
                        <span>
                          {day} {startDay > 30 ? startDay = 1 : startDay++}
                        </span>
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      {handleCalendarLayout()}
    </div>
  );
};

export default Calendar;
