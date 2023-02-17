import { Typography } from "antd";
import moment from "moment";

export function EventTimeSlot({ slot, onCLick, children }) {
  const startsAt = moment(slot.startsAt);
  const durationInSecs = Math.abs(startsAt.diff(slot.endsAt, "minutes"));
  const minutesFromMidnight = (startsAt.hours() - 1) * 60 + startsAt.minutes();
  return (
    <button
      className="timeslot"
      style={{
        height: durationInSecs,
        top: minutesFromMidnight,
      }}
      onClick={() => onCLick(slot)}
    >
      <Typography.Text className="timeslot__text" ellipsis>
        {children}
      </Typography.Text>
    </button>
  );
}
