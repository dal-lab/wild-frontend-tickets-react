import { memo } from "react";
import { Ticket, TicketActions } from "./types";

function TicketItem({
  ticket,
  ticketActions,
}: {
  ticket: Ticket;
  ticketActions: TicketActions;
}) {
  const handleClick = () => {
    ticketActions.toggleTicketStatus(ticket.id);
  };

  console.log("Render TicketItem", ticket.id);

  return (
    <li>
      <div className="title">{ticket.title}</div>
      <div className="description">{ticket.description}</div>
      <button className="status" onClick={handleClick}>
        {ticket.status === "open" ? "Open" : "Closed"}
      </button>
    </li>
  );
}

export const TicketItemMemo = memo(TicketItem);
export default TicketItem;
