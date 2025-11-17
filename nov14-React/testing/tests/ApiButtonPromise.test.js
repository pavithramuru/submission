import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ApiButtonPromise from "../src/components/ApiButtonPromise";

global.fetch = jest.fn();

test("clicking Promise button triggers API call and updates data", async () => {
  fetch.mockResolvedValueOnce({
    json: async () => ({ message: "Promise Success" }),
  });

  render(<ApiButtonPromise />);

  const button = screen.getByText("Load (Promise)");

  expect(button).toBeInTheDocument();

  await userEvent.click(button);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith("/promise-api");

  const status = await screen.findByText("Promise Success");
  expect(status).toBeInTheDocument();
});
