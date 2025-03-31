import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CommentForm from "./CommentForm";

const context = describe;

describe("CommentForm", () => {
  const dispatch = vi.fn();
  const ticketId = 1;

  function renderCommentForm() {
    render(<CommentForm dispatch={dispatch} ticketId={ticketId} />);
  }

  it("renders user input fields and button", () => {
    renderCommentForm();
    screen.getByRole("textbox", { name: /Content/ });
    screen.getByRole("button", { name: /Add Comment/ });
  });

  context("when user clicks add comment button", () => {
    it("calls dispatch function", () => {
      renderCommentForm();

      fireEvent.click(screen.getByRole("button", { name: /Add Comment/ }));

      expect(dispatch).toBeCalled();

      const firstArguments = dispatch.mock.calls[0];

      const action = firstArguments[0];

      expect(action.type).toBe("addComment");
      expect(action.ticketId).toBe(ticketId);
      expect(action.content).toBe("");
    });

    it("resets form", () => {
      renderCommentForm();

      fireEvent.click(screen.getByRole("button", { name: /Add Comment/ }));

      expect(screen.getByRole("textbox")).toHaveValue("");
    });
  });
});
