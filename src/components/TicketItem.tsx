import { memo, useEffect } from "react";

import { Dispatch, Ticket } from "../types";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function TicketItem({
  ticket,
  dispatch,
}: {
  ticket: Ticket;
  dispatch: Dispatch;
}) {
  const handleClick = () => {
    dispatch({ type: "toggleTicketStatus", id: ticket.id });
  };

  useEffect(() => {
    console.log("Render TicketItem", ticket.id);
  });

  return (
    <li>
      <div className="title">{ticket.title}</div>
      <div className="description">{ticket.description}</div>
      <button className="status" onClick={handleClick}>
        {ticket.status === "open" ? "Open" : "Closed"}
      </button>
      <CommentList comments={ticket.comments} />
      <CommentForm ticketId={ticket.id} dispatch={dispatch} />
    </li>
  );
}

export default memo(TicketItem);
