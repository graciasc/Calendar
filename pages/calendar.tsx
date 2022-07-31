import React, { useState } from "react";
import { CheckIcon, ThumbUpIcon, UserIcon } from "@heroicons/react/solid";

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
  const timeline = [{
    id: 1,
    content: "Create Events",
    target: "Front End Developer",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  }, {
    id: 2,
    content: "Advanced to phone screening by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: ThumbUpIcon,
    iconBackground: "bg-blue-500",
  }, {
    id: 3,
    content: "Completed phone screening with",
    target: "Martha Gardner",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  }, {
    id: 4,
    content: "Advanced to interview by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: ThumbUpIcon,
    iconBackground: "bg-blue-500",
  }, {
    id: 5,
    content: "Completed interview with",
    target: "Katherine Snyder",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  }];
  const handleCalendarLayout = () => {
    const rows = Math.ceil(props.days / 7);
    let startDay = 1;
    return (
      <div className="flex h-full font-mono">
        <div className="w-1/2 flow-root grid justify-center items-end">
          <ul role="list" className="-mb-8">
            {timeline.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-8">
                  {eventIdx !== timeline.length - 1
                    ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    )
                    : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={classNames(
                          event.iconBackground,
                          "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white",
                        )}
                      >
                        <event.icon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          {event.content}{" "}
                          <a
                            href={event.href}
                            className="font-medium text-gray-900"
                          >
                            {event.target}
                          </a>
                        </p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <time dateTime={event.datetime}>{event.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className=" text-md p-2 w-1/2 grid justify-center items-end">
          <h1 className="grid justify-center text-lg text-purple-400">
            {props.month} {props.year}
          </h1>
          <div className="grid grid-cols-7 gap-4 ">
            {daysOfWeek.map((day) => {
              return <h1 className="flex justify-center">{day[0]}</h1>;
            })}
          </div>
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
                            {startDay > 30 ? startDay = 1 : startDay++}
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
      </div>
    );
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      {handleCalendarLayout()}
    </div>
  );
};

export default Calendar;
