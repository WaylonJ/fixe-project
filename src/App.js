import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailsPage from "./pages/DetailsPage.js";
import { ListProvider } from "./util/ListContext";

function App() {
  return (
    <ListProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </ListProvider>
  );
}

export default App;
