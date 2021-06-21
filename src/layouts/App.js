import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>{<Header />}</header>
          <main>
            <aside>{<Navigation />}</aside>
            <section className="page">{<Page />}</section>
          </main>
        </div>
      </Router>
    );
  }
}
export default App;
