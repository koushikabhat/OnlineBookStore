import React from 'react'
import './Navbarstyle.css'
import { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router-dom'



const Container1 = () => {

   const Navigate = useNavigate()
   const  [books, setbooks] = useState([])


   
   
   useEffect(() => {
      const fetchdata = async()=>{
         const response = await fetch('http://localhost:3000/getmovies')
         let data = await response.json()
         await setbooks(data)
         
      }
      fetchdata()
    }, [])


    const clickonCard = (bookId)=>{
      Navigate(`/book/${bookId}`)
    }


  return (
   <>
      <div className='MainBox'>
            {  books.map(book => (
                  <div onClick={()=> clickonCard(book.bookId)} className='cards' key={book.bookId}>
                     <img className='bookimg' src={book.image} alt="" />
                     <div className='titlename'>{book.bookname}</div>
                     <div className='author'>{book.author}</div>
                     <div className='id'>ID : {book.bookId}</div>
                     <div className='isavailabel'> IsAvailabel : {book.isAvailable.toString()}</div>
                  </div> 
               )) 
            }  
      </div>


   </>
  )
}

export default Container1
