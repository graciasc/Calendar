import { Calendar } from "./dates.d";
const MONTHS = 12;

function _getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}
export function setUpCalendar(year: number) {
  const calendar: Calendar = {};
  for (let i = 0; i < MONTHS; i++) {
    calendar[i] = {
      totalDays: _getDaysInMonth(year, i),
      reminders: [],
    };
  }
  return calendar;
}
