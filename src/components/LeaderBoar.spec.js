/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import LeaderBoard from "./LeaderBoard";
import configureStore from "redux-mock-store";
import { mockStoreData } from "../utils/mockStoreDate";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

describe("LeaderBoard component", () => {
  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it("displays correct user's name display on screen", () => {
    // Mock users data

    // Render the LeaderBoard component with mock users data
    const { getByText } = render(
      <Provider store={store}>
        <LeaderBoard />
      </Provider>,
    );

    // Verify that each user's name, number of questions answered, and number of questions created are displayed correctly
    expect(getByText("Sarah Edo")).toBeInTheDocument();
    expect(getByText("Tyler McGinnis")).toBeInTheDocument();
    expect(getByText("Mike Tsamis")).toBeInTheDocument();
    expect(getByText("Zenobia Oshikanlu")).toBeInTheDocument();
  });
  it("displays correct user's answered number", () => {
    // Mock users data

    // Render the LeaderBoard component with mock users data
    const { getByTestId } = render(
      <Provider store={store}>
        <LeaderBoard />
      </Provider>,
    );

    // Verify that each user's name, number of questions answered, and number of questions created are displayed correctly
    expect(getByTestId("Sarah Edo answered").textContent).toBe("4");
    expect(getByTestId("Tyler McGinnis answered").textContent).toBe("2");
    expect(getByTestId("Mike Tsamis answered").textContent).toBe("3");
    expect(getByTestId("Zenobia Oshikanlu answered").textContent).toBe("1");
  });

  it("displays correct user's created number", () => {
    // Mock users data

    // Render the LeaderBoard component with mock users data
    const { getByTestId } = render(
      <Provider store={store}>
        <LeaderBoard />
      </Provider>,
    );

    // Verify that each user's name, number of questions answered, and number of questions created are displayed correctly
    expect(getByTestId("Sarah Edo created").textContent).toBe("2");
    expect(getByTestId("Tyler McGinnis created").textContent).toBe("2");
    expect(getByTestId("Mike Tsamis created").textContent).toBe("2");
    expect(getByTestId("Zenobia Oshikanlu created").textContent).toBe("0");
  });
});
