import { AgendaTimeRange } from "./AgendaTimeRange";
import { GridColsPlaceholder } from "./GridColsPlaceholder";
import { EventTimeSlot } from "./EventTimeSlot";
import { AgendaViewContainer } from "./AgendaView.styles";

function AgendaView({
  events = [
    {
      _id: "123",
      startsAt: "2023-02-17T13:00:00.000Z",
      endsAt: "2023-02-17T14:00:00.000Z",
    },
  ],
}) {
  return (
    <AgendaViewContainer>
      <div className="agenda">
        <AgendaTimeRange />
        <GridColsPlaceholder />
        <div className="grid__row">
          {events.map((slot) => (
            <EventTimeSlot
              key={slot._id}
              onCLick={(slot) => alert("clicked")}
              slot={slot}
            >
              <div>Hospital</div>
            </EventTimeSlot>
          ))}
        </div>
      </div>
    </AgendaViewContainer>
  );
}

export default AgendaView;
