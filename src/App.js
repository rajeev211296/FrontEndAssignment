import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Study from "./components/Study";
import Mds from "./components/Mds";
import Eligibility from "./components/Eligibility";
import Questions from "./components/Questions";
import Research from "./components/Research";
import Monthly from "./components/Monthly";
import Checkup from "./components/Checkup";
import Patient from "./components/Patient";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Study />
      <Mds />
      <Eligibility />
      <Questions />
      <Research />
      <Monthly />
      <Checkup />
      <Patient />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
