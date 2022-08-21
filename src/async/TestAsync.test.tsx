import React from "react";
import {
    render,
    fireEvent,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import TestAsync from "./TestAsync";

describe('waitFor', () => {
    test('increments counter after 0.5s', async () => {
        render(<TestAsync />)
        fireEvent.click(screen.getByTestId("button-up"))
        await waitFor(() =>  expect(screen.getByText(1)))
    })
    test('waitForElementToBeRemoved', () => {
        render(<TestAsync />)
        fireEvent.click(screen.getByTestId("button-up"))
        waitForElementToBeRemoved(screen.queryByTestId("button-up")).then(() => {
           console.log('Element no longer in DOM')
        })  
    })
})