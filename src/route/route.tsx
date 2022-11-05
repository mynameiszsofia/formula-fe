import React, { Component } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import CardList from '../components/cardList/cardList.component'

export default class RoutesForApp extends Component {
  render() {
    return (
      <BrowserRouter>
            <Routes>
            <Route
                path="/"
                element={<Navigate to="/drivers" replace />}
                />
            <Route path="/drivers" element={<CardList />} />
          </Routes>
      </BrowserRouter>
    );
  }
}