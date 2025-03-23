export interface Ticket {
    id: number;
    title: string;
    description: string;
    status: 'open' | 'closed';
    comments: Comment[];
}

export interface Comment {
    id: number;
    content: string;
}

interface AddTicketAction {
    type: 'addTicket';
    title: string;
    description: string;
}
  
interface ToggleTicketStatusAction {
    type: 'toggleTicketStatus';
    id: number;
}

interface AddCommentAction {
    type: 'addComment';
    ticketId: number;
    content: string;
}
  
export type TicketAction = AddTicketAction | ToggleTicketStatusAction | AddCommentAction;
  
export type Dispatch = (action: TicketAction) => void;
  