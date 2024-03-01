import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books,setBooks] = useState([]);

    useEffect(() => {
       fetch(" http://localhost:5000/books")
       .then(res => res.json())
       .then(data =>setBooks(data.slice(0,6)))
    },[])


  return (
    <div>
      <h1><BookCards books = {books} headLine = "Best Seller Books"/></h1>
    </div>
  )
}

export default BestSellerBooks 
