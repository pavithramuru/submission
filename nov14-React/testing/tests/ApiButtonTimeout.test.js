import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ApiButtonTimeout from "../src/components/ApiButtonTimeout";

jest.useFakeTimers();
global.fetch = jest.fn();

test("loads mock timeout api", async () => {
  fetch.mockResolvedValueOnce({
    json: async () => ({ message: "Timeout Success" }),
  });

  render(<ApiButtonTimeout />);

  userEvent.click(screen.getByText("Load (Timeout)"));

  jest.advanceTimersByTime(500);

  expect(await screen.findByText("Timeout Success")).toBeInTheDocument();
});
