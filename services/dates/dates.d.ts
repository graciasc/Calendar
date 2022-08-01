export interface MonthDetails {
  totalDays: number;
  reminders: Object;
}
export interface CalendarType {
  [key: string]: MonthDetails;
}
