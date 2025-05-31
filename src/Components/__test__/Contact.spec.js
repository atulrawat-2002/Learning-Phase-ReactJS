import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'

test("Contact componet should be rendered", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // assertion
    expect(heading).toBeInTheDocument();
})

test("button should be rendered inside the dom", () => {
    render(<Contact />);

    const button = screen.getByText('Submit');

    // assertion
    expect(button).toBeInTheDocument();

})