import useTickets from "../hooks/useTickets";

import TicketForm from "./TicketForm";
import TicketList from "./TicketList";

export default function Main() {
  const { tickets, dispatch } = useTickets();

  return (
    <main>
      <TicketList tickets={tickets} dispatch={dispatch} />
      <TicketForm dispatch={dispatch} />
    </main>
  );
}
