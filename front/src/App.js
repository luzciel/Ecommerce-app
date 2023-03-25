import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header  from "./components/Header.js";
import ProductsListPage from "./components/ProductsListPage";
import ProductDisplayPage from "./components/ProductDisplayPage"


const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState("");

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5000/")
        .then((res) => res.text())
        .then((res) => setResponse(res));
    };
    getApiResponse();
  }, []);
  // -------------------------------------------------

  return (
    <Router>
      <div>
        <div>
          <Header/>
        </div>
        <Routes>
          <Route path='/' element={<ProductsListPage/>} />
          <Route path='/product/:id' element={<ProductDisplayPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
