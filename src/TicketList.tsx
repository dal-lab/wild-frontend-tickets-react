import { Ticket, TicketActions } from "./types";
import { TicketItemMemo } from "./TicketItem";

export default function TicketList({
  tickets,
  ticketActions,
}: {
  tickets: Ticket[];
  ticketActions: TicketActions;
}) {
  return (
    <ul className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItemMemo
          key={ticket.id}
          ticket={ticket}
          ticketActions={ticketActions}
        />
      ))}
    </ul>
  );
}
