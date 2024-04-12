import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import './styles.css';
// import BookListPage from './BookListPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/booklist" component={BookListPage} /> */}
      </Routes>
    </Router>
  );
}

export default App;
