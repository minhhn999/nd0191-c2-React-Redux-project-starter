/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional matchers like toBeInTheDocument

import Login from "./Login";
import { Provider } from "react-redux";
import { handleLogin } from "../actions/login";
import { mockStoreData } from "../utils/mockStoreDate";
import configureStore from "redux-mock-store";
import { act } from "react-dom/test-utils";

jest.mock("../actions/login");
const mockStore = configureStore([]);

describe("Login Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({ mockStoreData });
    store.dispatch = jest.fn();
  });
  it("will match snapshot", () => {
    var view = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(view).toMatchSnapshot();
  });

  it("should update UI after login", async () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );

    act(() => {
      // Fill in the username and password fields
      fireEvent.change(getByPlaceholderText("Enter Username"), {
        target: { value: "testUser" },
      });
      fireEvent.change(getByPlaceholderText("Enter Password"), {
        target: { value: "testPassword" },
      });

      // Click the login button
      fireEvent.click(getByText("Login"));
    });

    // Verify handleLogin is called with correct values
    expect(handleLogin).toHaveBeenCalledWith("testUser", "testPassword");
  });

  it("should render username field, password field, and submit button", () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );

    // Check if username field is present
    const usernameField = getByPlaceholderText("Enter Username");
    expect(usernameField).toBeInTheDocument();

    // Check if password field is present
    const passwordField = getByPlaceholderText("Enter Password");
    expect(passwordField).toBeInTheDocument();

    // Check if submit button is present
    const submitButton = getByText("Login");
    expect(submitButton).toBeInTheDocument();
  });

  it("should display error message if input incorrect username & password", async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );

    act(() => {
      // Fill in the username and password fields with incorrect values
      fireEvent.change(getByPlaceholderText("Enter Username"), {
        target: { value: "incorrectUsername" },
      });
      fireEvent.change(getByPlaceholderText("Enter Password"), {
        target: { value: "incorrectPassword" },
      });

      // Click the login button
      fireEvent.click(getByText("Login"));
    });

    await waitFor(() => {
      const errorMessage = getByTestId("error-message");
      expect(errorMessage.textContent).toBe(
        "Incorrect Username or Password. Please retry again!",
      );
    });
  });
});
