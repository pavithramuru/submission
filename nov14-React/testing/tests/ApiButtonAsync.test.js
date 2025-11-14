import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ApiButtonAsync from "../src/components/ApiButtonAsync";

global.fetch = jest.fn();

test("loads mock async api", async () => {
  fetch.mockResolvedValueOnce({
    json: async () => ({ message: "Async Success" }),
  });

  render(<ApiButtonAsync />);

  await userEvent.click(screen.getByText("Load (Async)"));

  expect(await screen.findByText("Async Success")).toBeInTheDocument();
});
