import { Dispatch, Ticket } from "../types";

import TicketItem from "./TicketItem";

export default function TicketList({
  tickets,
  dispatch,
}: {
  tickets: Ticket[];
  dispatch: Dispatch;
}) {
  return (
    <ul id="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} dispatch={dispatch} />
      ))}
    </ul>
  );
}
