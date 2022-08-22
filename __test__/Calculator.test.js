/**
 * @jest-environment jsdom
 */
import React from "react";
import Calculator from "../src/Calculator.jsx";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";

test("Should renders components correctly", () => {
    const { getByTestId } = render(<Calculator />);

    const amount = getByTestId("amount");
    const select = getByTestId("select");
    const slider = getByTestId("slider");
    const calButton = getByTestId('calButton');
    const opening = getByTestId("opening");
    const tipButton = getByTestId("10");
    const custom = getByTestId('custom');

    expect(amount.textContent).toBe("Amount");
    expect(select.textContent).toBe("Select Tip 0%");
    expect(slider).toHaveValue("1");
    expect(calButton).toHaveAttribute("name");
    expect(opening.textContent).toContain("Usage AI.");
    expect(tipButton).toHaveValue("10");
    expect(custom).toBeEnabled();
})

test("Should enable user fill in the form correctly", async () => {
    const { getByTestId } = render(<Calculator />);
    userEvent.type(screen.getByTestId("amountInput"), '400');
    await waitFor(() => {
        expect(screen.getByTestId("amountInput")).toHaveValue(400);
    })
    userEvent.click(screen.getByTestId("10"));
    await waitFor(() => {
        expect(screen.getByText("Select Tip 10%")).toBeInTheDocument();
    });
    userEvent.click(getByTestId("calButton"));
    await waitFor(() => {
        expect(screen.getByText("Subtotal", "Tax (8.875%)", "$475.50")).toBeInTheDocument();
    });
});

test("Should raise error message when amount is empty", async () => {
    const { getByTestId } = render(<Calculator />);
    userEvent.click(screen.getByTestId("10"));
    userEvent.click(getByTestId("calButton"));
    await waitFor(() => {
        expect(screen.getByTestId("errorMessage").textContent).toContain("Please type in your amount");
    });
});

test("Should raise error message when tip is empty", async () => {
    const { getByTestId } = render(<Calculator />);
    userEvent.type(screen.getByTestId("amountInput"), '400');
    await waitFor(() => {
        expect(screen.getByTestId("amountInput")).toHaveValue(400);
    });
    userEvent.click(getByTestId("calButton"));
    await waitFor(() => {
        expect(screen.getByTestId("errorMessage").textContent).toContain("Please select or type in your tips");
    });
});

test("Should show price for per person if the number of people is greater than 1", async () => {
    const { getByTestId } = render(<Calculator />);
    userEvent.type(screen.getByTestId("amountInput"), '400');
    await waitFor(() => {
        expect(screen.getByTestId("amountInput")).toHaveValue(400);
    })
    userEvent.click(screen.getByTestId("10"));
    await waitFor(() => {
        expect(screen.getByText("Select Tip 10%")).toBeInTheDocument();
    });
    fireEvent.change(getByTestId("slider"), { target: { value: 2 }});
    await waitFor(() => {
        expect(screen.getByText("Number of People: 2")).toBeInTheDocument();
    });
    userEvent.click(getByTestId("calButton"));
    await waitFor(() => {
        expect(screen.getByText("Per Person / $237.75")).toBeInTheDocument();
    });
});


