import { FormEvent } from 'react';
import { Dispatch } from '../types';
import SubmitButton from './SubmitButton';
import TextField from './TextField';
import TextArea from './TextArea';

export default function TicketForm({ dispatch }: {
  dispatch: Dispatch;
}) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;

    dispatch({ type: 'addTicket', title, description });

    form.reset();
  };

  return (
    <form id="add-ticket-form" onSubmit={handleSubmit}>
      <TextField label="ticket-title" name="title" placeholder="Title" />
      <TextArea label="ticket-description" name="description"  placeholder="Description" />
      <SubmitButton label="Add Ticket" />
    </form>
  );
}