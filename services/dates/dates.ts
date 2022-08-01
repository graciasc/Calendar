import { CalendarType } from "./dates.d";

const MONTHS = 12;
const monthTxt = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

function getMonthName(monthIndex: number): string {
  return monthTxt[monthIndex];
}
function setUpCalendar(year: number) {
  const calendar: CalendarType = {};
  for (let i = 0; i < MONTHS; i++) {
    calendar[i] = {
      totalDays: getDaysInMonth(year, i),
      reminders: [],
    };
  }
  return calendar;
}

export { getDaysInMonth, getMonthName, setUpCalendar };
