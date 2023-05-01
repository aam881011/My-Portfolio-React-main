import { Routes } from "react-router-dom";
import "./App.scss";
import Certificates from "./component/Certificates/Certificates";
// import CustomerReviews from "./component/CustomerReviews/CustomerReviews";
import Navigation from "./component/Navigation/Navigation";
import Skills from "./component/Skills/Skills";
import MyWork from "./component/MyWork/MyWork";
import ContactUs from "./component/ContactUs/ContactUs";
import AboutMe from "./component/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutMe />
      <Certificates />
      <Skills />
      <MyWork />
      <ContactUs />
      {/*
      <CustomerReviews />
  */}
    </div>
  );
}

export default App;
