import React from "react";

import "./App.css";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="netflix-app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
