import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
axios.defaults.baseURL = "http://localhost:8000/api/v1/";

const BookContext = createContext();
const initialForm = {
    'title': '',
    'author': ''
};

export const BookProvider = ({ children }) => {
    const [formValues, setFormValues] = useState(initialForm);
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState([]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // index
    const getBooks = async () => {
        const apiBooks = await axios.get('books');
        setBooks(apiBooks.data.data);
    }

    // show
    const getBook = async (id) => {
        const response = await axios.get(`books/${id}`);
        const data = response.data.data;
        setBook(data);
        setFormValues({
            'title': data.title,
            'author': data.author
        });
    }

    // store
    const storeBook = async (e) => {
        e.preventDefault();
        try {
            await axios.post('books', formValues);
            setFormValues(initialForm);
            navigate("/books");
        } catch (e) {
            if (e.response.status == 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    // update
    const updateBook = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`books/${book.id}`, formValues);
            setFormValues(initialForm);
            navigate('/books');
        } catch (e) {
            if (e.response.status == 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    const deleteBook = async (id) => {
        if (!window.confirm("Are you sure?")) {
            return
        }
        await axios.delete(`books/${id}`);
        getBooks();
    };

    return <BookContext.Provider value={{ book, books, getBook, getBooks, onChange, formValues, storeBook, errors, setErrors, updateBook, deleteBook }}>{children}</BookContext.Provider>
}

export default BookContext;