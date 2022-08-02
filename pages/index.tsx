import Header from "./components/header";
import Footer from "./components/footer";
import Section from "./components/section";
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
        <Header headers={["About", "Contact"]} />
        <Section>
          <h1 className="text-3xl font-serif">
            This is a project idea from the
            <span className="border-white hover:text-purple-100 text-purple-200">
              <a href="https://github.com/florinpop17/app-ideas" /> app-ideas
            </span>
            repo
            <span className="border-b-2 border-white hover:text-gray-200">
              <a href="https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calendar-App.md">
                github
              </a>
            </span>.
          </h1>
        </Section>
      </div>

      <Calendar
        days={days}
        month={month}
        year={year}
      />
      <Footer />
    </div>
  );
};
export default Home;
