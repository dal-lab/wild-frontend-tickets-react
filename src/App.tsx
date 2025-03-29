import { useState } from "react";
import { Ticket, TicketActions } from "./types";
import TicketList from "./TicketList";
import TicketForm from "./TicketForm";
import { useTickets } from "./hooks/useTickets";

function App() {
  const { tickets, ticketActions } = useTickets();

  return (
    <div className="container">
      <h1>Ticket Management</h1>
      <TicketForm ticketActions={ticketActions} />
      <TicketList tickets={tickets} ticketActions={ticketActions} />
    </div>
  );
}

export default App;
