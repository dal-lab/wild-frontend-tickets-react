import { useState } from "react";
import { Ticket, TicketActions } from "./types";
import TicketList from "./TicketList";
import TicketForm from "./TicketForm";

function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const ticketActions: TicketActions = {
    addTicket({ title, description }) {
      setTickets((prev) => [
        ...prev,
        {
          id: prev.length > 0 ? Math.max(...prev.map((t) => t.id)) + 1 : 1,
          title,
          description,
          status: "open",
        },
      ]);
    },

    toggleTicketStatus(id) {
      setTickets((prev) =>
        prev.map((ticket) =>
          ticket.id === id
            ? {
                ...ticket,
                status: ticket.status === "open" ? "closed" : "open",
              }
            : ticket
        )
      );
    },
  };

  return (
    <div className="container">
      <h1>Ticket Management</h1>
      <TicketForm ticketActions={ticketActions} />
      <TicketList tickets={tickets} ticketActions={ticketActions} />
    </div>
  );
}

export default App;
