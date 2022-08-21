import React from "react";
import { BrowserRouter as Router, BrowserRouterProps} from "react-router-dom";
import { render, screen} from "@testing-library/react";
import TestRouter from "./TestRouter";

const renderWithRouter = (component: React.ReactNode )=> {
    return {
      ...render(<Router>{component}</Router>),
    };
};

it("should render the home page", () => {
    const { container} = renderWithRouter(<TestRouter />);
    const navbar = screen.getByTestId("navbar");
    const link = screen.getByTestId("home-link");
  
    expect(container.innerHTML).toMatch("Home page");
    expect(navbar).toContainElement(link);
});
  