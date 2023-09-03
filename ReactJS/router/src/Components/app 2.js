import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Home = () => {
  return <h1>Home Page</h1>;
};

const About = () => {
  return <h1>About Page</h1>;
};

const Contact = () => {
  return <h1>Contact Page</h1>;
};

const NotFound = () => {
  return <h1>404 Page Not Found</h1>;
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
};

export default App;