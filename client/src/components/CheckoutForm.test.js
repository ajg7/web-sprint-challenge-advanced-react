import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    const { getByText } = render(<CheckoutForm />);
    const formHeaderRender = screen.getByText(/checkout form/i);
    expect(formHeaderRender).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    const { getByTestId } = render(<CheckoutForm />);
    const submitButtonMessage = getByTestId("checkout-button");

    fireEvent.click(submitButtonMessage);
    const successMessage = getByTestId("successMessage");
    expect(successMessage).toBeInTheDocument();
});
