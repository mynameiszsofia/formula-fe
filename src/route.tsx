import React, { Component } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import BasicCard from './screen/card'

export default class RoutesForApp extends Component {
  render() {
    return (
      <BrowserRouter>
            <Routes>
            <Route
                path="/"
                element={<Navigate to="/drivers" replace />}
                />
            <Route path="/drivers" element={<BasicCard />} />
          </Routes>
      </BrowserRouter>
    );
  }
}