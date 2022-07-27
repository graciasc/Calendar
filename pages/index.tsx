import React, { useEffect, useState } from "react";
import {
  getDaysInMonth,
  getMonthName,
  setUpCalendar,
} from "../services/dates/dates";
import { CalendarType } from "../services/dates/dates.d";
import Calendar from "./calendar";

const Home = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [days, setDays] = useState<number>(
    getDaysInMonth(year, new Date().getMonth()),
  );
  const [month, setMonth] = useState<string>(
    getMonthName(new Date().getMonth()),
  );
  const [calendar, setCalendar] = useState<CalendarType>(
    setUpCalendar(year),
  );

  useEffect(() => {
    console.log(year, calendar);
    console.log("running");
  }, []);

  return (
    <div className="bg-white h-screen">
      <div className="text-white h-1/2 p-12 bg-gray-900">
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

      <Calendar
        days={days}
        month={month}
        year={year}
      />
      <footer className="mt-24 bg-gray-900 sm:mt-12">
        <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                About
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Blog
              </a>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2022 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Home;
