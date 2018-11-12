import React, { Component } from 'react';
import { inject} from "mobx-react";
import SearchForm from './js/components/searchForm'
import './App.css';

@inject("store")
class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm />
      </div>
    );
  }
}

export default App;