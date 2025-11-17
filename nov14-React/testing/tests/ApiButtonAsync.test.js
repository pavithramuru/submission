import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ApiButtonAsync from "../src/components/ApiButtonAsync";

// Mock global fetch
global.fetch = jest.fn();

test("clicking Async button triggers API call and updates data", async () => {
  fetch.mockResolvedValueOnce({
    json: async () => ({ message: "Async Success" }),
  });

  render(<ApiButtonAsync />);

  const button = screen.getByText("Load (Async)");

  expect(button).toBeInTheDocument();

  await userEvent.click(button);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith("/async-api");

  const status = await screen.findByText("Async Success");
  expect(status).toBeInTheDocument();
});
