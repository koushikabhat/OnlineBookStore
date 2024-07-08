
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './bookdetailsStyle.css'

const BookDetails = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    
    const fetchBook = async () => {
        try {
            let response = await fetch(`http://localhost:3000/getmovies/${bookId}`);
            if (!response.ok) {
                throw new Error('Book not found');
            }
            let data = await response.json();
            setBook(data);
        } catch (error) {
            console.error('Error fetching book:', error);
        }
    };

    fetchBook();
  }, [bookId]);

  const handleBuy = async () => {
    try {
      const response = await fetch(`http://localhost:3000/buy/${bookId}`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to purchase book');
      }

      const result = await response.json();

      if (result.success) {
        setBook((prevBook) => ({ ...prevBook, isAvailable: false }));
        alert('Book purchased successfully');
      } else {
        alert('Book is not available');
      }
    } catch (error) {
      console.error('Error buying book:', error);
    }
  };

  if (!book) return <div>Loading...</div>;

  return (
    <>
      <div className='b-d-main'>
        <div className='b-d-imagediv'>
          <img className='b-d-image' src={book.image} alt="" />
        </div>
        <div className='book-cards'>
          
          <div className='b-d-titlename'>{book.bookname}</div>
          <div className='b-d-author'>{book.author}</div>
          <div className='b-d-id'>ID: {book.bookId}</div>
          <div className='b-d-isavailable'>Is Available: {book.isAvailable.toString()}</div>
          <div className='b-d-button' onClick={handleBuy}>Buy</div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
