export interface MonthDetails {
  totalDays: number;
  reminders: Object;
}
export interface Calendar {
  [key: string]: MonthDetails;
}
