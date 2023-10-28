// Given two dates, return array of dates between the two
export default function getDaysFromRange(startDate: Date, endDate: Date) {
  let days = [];
  let end = new Date(endDate);
  for (
    let start = new Date(startDate);
    start <= end;
    start.setDate(start.getDate() + 1)
  ) {
    days.push(new Date(start));
  }
  return days;
}
