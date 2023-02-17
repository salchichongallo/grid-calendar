import { TimeRange } from "./TimeRange";

export function AgendaTimeRange() {
  const hours = new Array(12).fill(0);
  return (
    <div className="agenda__timerange-container">
      {hours.map((_, hour) => (
        <TimeRange key={hour}>{hour + 1}:00 AM</TimeRange>
      ))}
      {hours.map((_, hour) => (
        <TimeRange key={hour + 12}>{hour + 1}:00 PM</TimeRange>
      ))}
    </div>
  );
}
