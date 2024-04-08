import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { BookProvider } from './Context/BookContext';
import Home from './components/Home';
import BookIndex from './components/books/BookIndex';
import BookCreate from './components/books/BookCreate';
import BookEdit from './components/books/BookEdit';

function App() {
  return (
    <BookProvider>
      <div className="bg-slate-200">
        <div className='max-w-7xl mx-auto min-h-screen'>
          <nav>
            <ul className='flex'>
              <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
                <Link to="/">Home</Link>
              </li>
              <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
                <Link to="/books">Books</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books' element={<BookIndex />} />
            <Route path='/books/create' element={<BookCreate />} />
            <Route path='/books/:id/edit' element={<BookEdit />} />
          </Routes>
        </div>
      </div>
    </BookProvider>
  );
}

export default App;
