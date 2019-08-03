import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
