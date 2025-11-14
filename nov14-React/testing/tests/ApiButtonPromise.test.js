import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ApiButtonPromise from "../src/components/ApiButtonPromise";

global.fetch = jest.fn();

test("loads mock promise api", async () => {
  fetch.mockResolvedValueOnce({
    json: async () => ({ message: "Promise Success" }),
  });

  render(<ApiButtonPromise />);

  await userEvent.click(screen.getByText("Load (Promise)"));

  expect(await screen.findByText("Promise Success")).toBeInTheDocument();
});
