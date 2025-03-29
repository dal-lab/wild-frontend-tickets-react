import { useState } from "react";
import { TicketActions } from "./types";
import { Dispatch } from "./ticketsReducer";

interface TicketFormProps {
  dispatch: Dispatch;
}

export default function TicketForm({ dispatch }: TicketFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "addTicket", title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="ticket-form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="ticket-title">Title</label>
        <input
          id="ticket-title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Description">Description</label>
        <input
          id="Description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Ticket</button>
    </form>
  );
}
