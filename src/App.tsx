import { useReducer } from "react";
import TicketForm from "./TicketForm";
import { ticketsReducer } from "./ticketsReducer";
import TicketListMemo from "./TicketList";

function App() {
  const [tickets, dispatch] = useReducer(ticketsReducer, []);

  return (
    <div className="container">
      <h1>Ticket Management</h1>
      <TicketForm dispatch={dispatch} />
      <TicketListMemo tickets={tickets} dispatch={dispatch} />
    </div>
  );
}

export default App;
