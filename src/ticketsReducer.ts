import { Ticket } from "./types";

interface AddTicketAction {
  type: "addTicket";
  title: string;
  description: string;
}

interface ToggleTicketStatusAction {
  type: "toggleTicketStatus";
  id: number;
}

interface AddCommentAction {
  type: "addComment";
  ticketId: number;
  content: string;
}

type TicketAction =
  | AddTicketAction
  | ToggleTicketStatusAction
  | AddCommentAction;

export type Dispatch = (action: TicketAction) => void;

export function ticketsReducer(
  tickets: Ticket[],
  action: TicketAction
): Ticket[] {
  switch (action.type) {
    case "addTicket": {
      const id = Math.max(...tickets.map((ticket) => ticket.id), 0) + 1;
      const ticket: Ticket = {
        id,
        title: action.title,
        description: action.description,
        status: "open",
        comments: [],
      };
      return [...tickets, ticket];
    }

    case "toggleTicketStatus": {
      return tickets.map((ticket) =>
        ticket.id === action.id
          ? { ...ticket, status: ticket.status === "open" ? "closed" : "open" }
          : ticket
      );
    }

    case "addComment": {
      const id =
        Math.max(
          ...tickets.flatMap((ticket) =>
            ticket.comments.map((comment) => comment.id)
          ),
          0
        ) + 1;
      return tickets.map((ticket) =>
        ticket.id === action.ticketId
          ? {
              ...ticket,
              comments: [...ticket.comments, { id, content: action.content }],
            }
          : ticket
      );
    }
  }
}
