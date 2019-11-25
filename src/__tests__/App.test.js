import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";

describe("App component", () => {
  it("render App without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div); // Retire un composant React monté du DOM et nettoie ses gestionnaires d’événements et son état local
  });
});
