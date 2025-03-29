import { useState } from "react";
import SubmitButton from "./SubmitButton";
import TextArea from "./TextArea";
import TextField from "./TextField";
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
      <TextField label="Title" name="ticket-title" placeholder="Title" />
      <TextArea
        label="Description"
        name="ticket-description"
        placeholder="Description"
      />
      <SubmitButton label="Add Ticket" />
    </form>
  );
}
