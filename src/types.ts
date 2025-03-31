export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: "open" | "closed";
  comments: Comment[];
}

export interface Comment {
  id: number;
  content: string;
}

export interface TicketActions {
  addTicket({
    title,
    description,
  }: {
    title: string;
    description: string;
  }): void;

  toggleTicketStatus(id: number): void;
}

export interface AddCommentAction {
  type: "addComment";
  ticketId: number;
  content: string;
}
