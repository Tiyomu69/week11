import axios from 'axios';

const url = "http://localhost:5000/";

// Function to add a new book
export const addBook = (bookData) => axios.post(url + "addbooks", bookData);

// Function to update a book's details by ID
export const updateBook = (id, bookData) => axios.post(url + "updatebook/" + id, bookData);

// Function to delete a book by ID
export const deleteBook = (id) => axios.post(url + "deleteBook/" + id);

// Function to fetch all books
export const getAllBooks = () => axios.get(url + "allbooks");

// Function to fetch a single book by ID
export const getBookById = (id) => axios.get(url + "getbook/" + id);
