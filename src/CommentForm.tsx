import SubmitButton from "./SubmitButton";
import { Dispatch } from "./ticketsReducer";
import TextField from "./TextField";

interface CommentFormProps {
  dispatch: Dispatch;
  ticketId: number;
}

function CommentForm({ dispatch, ticketId }: CommentFormProps) {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const content = formData.get("comment-content") as string;

    dispatch({
      type: "addComment",
      ticketId,
      content,
    });
    form.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField label="Content" name="comment-content" placeholder="Content" />
      <SubmitButton label="Add Comment" />
    </form>
  );
}

export default CommentForm;
