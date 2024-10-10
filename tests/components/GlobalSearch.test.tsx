import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import { GlobalSearch } from "@/components/search";
import toast from "react-hot-toast";
import { vi } from "vitest";
// Mocking Next.js router
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

// Mocking react-hot-toast
vi.mock("react-hot-toast", () => ({
  default: {
    error: vi.fn(),
  },
}));

describe("GlobalSearch", () => {
  const setToggleSearch = vi.fn();
  const pushMock = vi.fn();

  beforeEach(() => {
    // eslint-disable-next-line
    (useRouter as unknown as vi.Mock).mockReturnValue({
      push: pushMock,
    });
    setToggleSearch.mockClear();
    pushMock.mockClear();
  });

  it("renders the GlobalSearch component correctly", () => {
    render(<GlobalSearch setToggleSearch={setToggleSearch} />);

    // Check if the input and button are in the document
    expect(
      screen.getByPlaceholderText(/search for movie/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("handles input and submits a search", async () => {
    render(<GlobalSearch setToggleSearch={setToggleSearch} />);
    const user = userEvent.setup();

    // Type a search term into the input
    const input = screen.getByPlaceholderText(/search for movie/i);
    await user.type(input, "Inception");

    // Submit the form
    const button = screen.getByRole("button", { name: /search/i });
    await user.click(button);

    // Verify the navigation function is called with the correct URL
    expect(pushMock).toHaveBeenCalledWith("/search?q=Inception");
    expect(setToggleSearch).toHaveBeenCalledWith(false);
  });

  it("shows an error toast when input is empty", async () => {
    render(<GlobalSearch setToggleSearch={setToggleSearch} />);
    const user = userEvent.setup();

    // Submit the form without typing anything
    const button = screen.getByRole("button", { name: /search/i });
    await user.click(button);

    // Verify that the error toast is shown
    expect(toast.error).toHaveBeenCalledWith("Please enter movie name🍿");
    expect(pushMock).not.toHaveBeenCalled(); // Ensure that push was not called
  });

  it("closes the search when X button is clicked", async () => {
    render(<GlobalSearch setToggleSearch={setToggleSearch} />);
    const user = userEvent.setup();

    // Click the close button (the X icon)
    const closeButton = screen.getByLabelText(/close/i);
    await user.click(closeButton);

    // Verify that setToggleSearch was called with false
    expect(setToggleSearch).toHaveBeenCalledWith(false);
  });
});
