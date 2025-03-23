import { useReducer } from 'react';

import TicketForm from './TicketForm';
import TicketList from './TicketList';

import reducer, { initialState } from '../reducer';

export default function Main() {

  const [ tickets, dispatch ] = useReducer(reducer, initialState);

  return (
    <main>
      <TicketList tickets={tickets} dispatch={dispatch} />
      <TicketForm dispatch={dispatch} />
    </main>
  );
}
