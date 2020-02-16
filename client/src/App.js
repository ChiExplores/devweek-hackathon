
import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  Redirect
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import { Header } from "./Header";
import {DisplayMap} from "./DisplayMap";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          // Render the newly fetched data inside of this.state.data
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/dataType/:location" component={Map} />
          </Switch>
        </BrowserRouter>

        <DisplayMap/>
        // Render the newly fetched data inside of this.state.data 
        <p className="App-intro">{this.state.data}</p>

      </div>
    );
  }
}

export default App;
