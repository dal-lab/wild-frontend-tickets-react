import { memo } from "react";
import { Ticket } from "./types";
import { Dispatch } from "./ticketsReducer";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

interface TicketItemProps {
  ticket: Ticket;
  dispatch: Dispatch;
}

function TicketItem({ ticket, dispatch }: TicketItemProps) {
  const handleToggleTicketStatusClick = () => {
    dispatch({ type: "toggleTicketStatus", id: ticket.id });
  };

  console.log("Render TicketItem", ticket.id);

  return (
    <li>
      <div className="title">{ticket.title}</div>
      <div className="description">{ticket.description}</div>
      <button className="status" onClick={handleToggleTicketStatusClick}>
        {ticket.status === "open" ? "Open" : "Closed"}
      </button>
      <CommentForm ticketId={ticket.id} dispatch={dispatch} />
      <CommentList comments={ticket.comments} />
    </li>
  );
}

export const TicketItemMemo = memo(TicketItem);
export default TicketItem;
