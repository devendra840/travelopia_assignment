import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HomePage from "../pages/HomePage";

describe("HomePage Component", () => {
  test("renders correctly", () => {
    render(<HomePage />);
    const headingElement = screen.getByText(/Traveling made easy/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("form submission with valid data", async () => {
    render(<HomePage />);
    const createTripButton = screen.getByText(/CREATE MY TRIP NOW/i);

    fireEvent.click(createTripButton);

  
    await waitFor(() => {
      expect(screen.getByText(/Your application has been received/i)).toBeInTheDocument();
    });
  });

  test("form submission with invalid data", async () => {
    render(<HomePage />);
    const createTripButton = screen.getByText(/CREATE MY TRIP NOW/i);

  
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "" },
    });

    fireEvent.click(createTripButton);

      await waitFor(() => {
      expect(screen.queryByText(/Your application has been received/i)).not.toBeInTheDocument();
      expect(screen.getByText(/Please enter your name/i)).toBeInTheDocument();
    });
  });
});