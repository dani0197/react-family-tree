import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import SearchForm from './js/components/searchForm';
import FamilyTree from './js/components/familyTree';
import './App.css';

@inject("store")
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm />
        {this.props.store.user ? <FamilyTree /> : null}
      </div>
    );
  }
}

export default App;