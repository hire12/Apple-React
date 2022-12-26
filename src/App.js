import React, { Component } from "react";
import Alert from "./components/ListOf/Alert";
import "./components/css/styles.css";
import "./components/css/bootstrap.css";
import Header from "./components/ListOf/Header";
import Footer from "./components/ListOf/Footer";
import Exam from "./components/ListOf/Exam";
import Fourth from "./components/ListOf/Fourth";
import Fifth from "./components/ListOf/Fifth"
import Sixth from "./components/ListOf/Sixth";
import CounterUsingHooksUseState from "./components/UseState/CounterUsingHooksUseState"
import CounterIncrementDecrement from "./components/UseState/CounterIncrementDecrement"
import UsingClassLifeCycleComponent from "./components/ClassStateExample/UsingClassLifeCycleComponent"
import YouTube from "./components/YouTube/YouTube";


import {BrowserRouter} from "react-router-dom";

import {Routes, Route} from "react-router-dom";

import Four04 from "./components/ListOf/Four04";
import Iphone from "./components/ListOf/iphone";
import ProductPage from "./components/ListOf/ProductPage";





// class App extends React
class App extends Component  {
  render() {
  return (
    <div>
      <Header />
      <Alert />
      <Routes>
        <Route path="/" element={<><Fourth /> <Fifth />  <Sixth /> </>}/>
        <Route path="/mac" element={<Exam />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/iphone/:productID" element={<ProductPage />} />
        <Route path="*" element={<Four04 />}/>
      </Routes>
      {/* <Iphone /> */}
      
      
      


      <Footer />  
    </div>
  );
}
}

export default App;
