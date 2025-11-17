import { render, screen, fireEvent } from "@testing-library/react";
import ApiButtonTimeout from "../src/components/ApiButtonTimeout";
import { act } from "react";

jest.useFakeTimers();
global.fetch = jest.fn();

test("clicking Timeout button triggers API call after delay and updates data", async () => {
  fetch.mockResolvedValueOnce({
    json: async () => ({ message: "Timeout Success" })
  });

  render(<ApiButtonTimeout />);

  fireEvent.click(screen.getByText("Load (Timeout)"));

  // Run the artificial timeout
  act(() => {
    jest.advanceTimersByTime(500);
  });

  // Flush Promise microtasks
  await act(async () => {});

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith("/timeout-api");

  const status = await screen.findByText("Timeout Success");
  expect(status).toBeInTheDocument();
});
