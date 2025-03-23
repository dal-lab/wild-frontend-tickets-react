import { useMemo, useState, useReducer } from 'react';

import reducer, { initialState } from '../reducer';

import { Ticket, Dispatch } from '../types';


export default function useTickets(): { tickets: Ticket[]; dispatch: Dispatch } {
  const [tickets, dispatch] = useReducer(reducer, initialState);

    return { tickets, dispatch };
}