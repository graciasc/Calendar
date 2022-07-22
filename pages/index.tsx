import React, { useEffect, useState } from "react";
import { setUpCalendar } from "../services/dates/dates";
import { Calendar } from "../services/dates/dates.d";

const Home = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [calendar, setCalendar] = useState<Calendar | Object>(
    setUpCalendar(year),
  );

  useEffect(() => {
    console.log(year, calendar);
    console.log("running");
  }, []);

  return (
    <div className="bg-white h-screen">
      <div className="text-white h-1/2 p-12 bg-gray-400">
        <div className="flex">
          <div className="flex-1 flex justify-between">
            <h1 className="text-2xl font-light cursor-pointer">Calendar</h1>
          </div>
          <div>
            <div className="flex text-lg">
              <h1 className="mx-2 border-b-2 border-transparent hover:border-white cursor-pointer">
                About
              </h1>
              <h1 className="mx-2 border-b-2 border-transparent hover:border-white cursor-pointer">
                Contact
              </h1>
              <i className="fa fa-instagram mx-3 mt-1"></i>
              <i className="fa fa-youtube mx-3 mt-1"></i>
              <i className="fa fa-facebook mx-3 mt-1"></i>
              <h1 className="bg-white text-purple-300 px-2 py-1 -mt-1 mx-3 text-lg cursor-pointer">
                Feedback
              </h1>
            </div>
          </div>
        </div>
        <div className="p-24 flex justify-center">
          <h1 className="text-3xl font-serif">
            This is a project idea from the{" "}
            <span className="border-white hover:text-purple-100 text-purple-200">
              <a href="https://github.com/florinpop17/app-ideas" /> app-ideas
            </span>{" "}
            repo{" "}
            <span className="border-b-2 border-white hover:text-gray-200">
              <a href="https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calendar-App.md">
                github
              </a>
            </span>.
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Home;
