import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the necessary components
import Book_Form from "./Component/AddBook";
import Book_UpDateForm from "./Component/BookUpdate";
import FncDisplayBooks from "./Component/DsplyBk_fncCompt";
import DeleteBook from "./Component/Delete_Book";
export default function App() {
  return (
    <Router>
      <div className="container">
        <center><h2>On-Line Book Library using React</h2></center>
        <br />
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <Link to="/" className="navbar-brand"><h4>Add a Book</h4></Link>
          <Link to="/DisplayBooksF1" className="navbar-brand"><h4>Display All Books</h4></Link>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<Book_Form />} />
          <Route path="/edit/:id" element={<Book_UpDateForm />} />
          <Route path="/Delete/:id" element={<DeleteBook />} />
          <Route path="/DisplayBooksF1" element={<FncDisplayBooks />} />
        </Routes>
      </div>
    </Router>
  );
}
