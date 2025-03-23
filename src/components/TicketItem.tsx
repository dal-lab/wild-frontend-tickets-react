import { useState } from 'react';

import { Ticket, Dispatch } from '../types';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

let count = 0;

export default function TicketItem({ ticket, dispatch }: {
  ticket: Ticket;
  dispatch: Dispatch;
}) {
    const [state, setState] = useState(count);

    const handleClick = () => {
      dispatch({ type: 'toggleTicketStatus', id: ticket.id });
    }
  
    console.log('Render TicketItem', ticket.id, '/', count, '/', state);

    return (
    <li>
        <div className="title">{ticket.title}</div>
        <div className="description">{ticket.description}</div>
        <button
        className="status"
        onClick={handleClick}
        >
        {ticket.status === 'open' ? 'Open' : 'Closed'}
        </button>
        <CommentList comments={ticket.comments} />
        <CommentForm ticketId={ticket.id} dispatch={dispatch} />
    </li>
    );
}