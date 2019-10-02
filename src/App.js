import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import SubmissionForm from './SubmissionForm';
import DisplayCard from './DisplayCard';
import DisplayPage from './DisplayPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={SubmissionForm} />
        <Route path="/display" component={DisplayPage} />
      </Router>
    </div>
  );
}

export default App;
