import React, { useContext, useEffect } from 'react'
import BookContext from '../../Context/BookContext'

const BookCreate = () => {
  const { formValues, onChange, storeBook, errors, setErrors } = useContext(BookContext);

  useEffect(() => {
    setErrors({});
  },[]);

  return (
    <div className='mt-12'>
      <form onSubmit={storeBook} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
        <div className='space-y-6'>
          <div className='mb-4'>
            <label htmlFor='title' className='block mb-2 text-sm font-medium'>Title</label>
            <input name='title' value={formValues['title']} onChange={onChange} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
            {errors.title && (
              <span className='text-sm text-red-400'>{errors.title[0]}</span>
            )}
          </div>
          <div className='mb-4'>
            <label htmlFor='author' className='block mb-2 text-sm font-medium'>Author</label>
            <input name='author' value={formValues['author']} onChange={onChange} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
            {errors.author && (
              <span className='text-sm text-red-400'>{errors.author[0]}</span>
            )}
          </div>
        </div>
        <div className='my-4'>
          <button className='px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>Store</button>
        </div>
      </form>
    </div>
  )
}

export default BookCreate