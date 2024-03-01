import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom'

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books") // Update the endpoint to fetch all books
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch books");
        }
        return res.json();
      })
      .then((data) => setAllBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handleDelete = (id) =>{
    console.log(id);
    fetch(` http://localhost:5000/books/${id}`,{
      method:"DELETE"
    }).then(res => res.json()).then(
      data => {alert("Book is deleted")
    //setAllBooks(data);
    }
    )
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.title}
              </Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>$10</Table.Cell>
              <Table.Cell>


              <Link className='mr-5' to= {`/admin/dashboard/edit/${book._id}`} >Edit</Link>

              <button onClick={() => handleDelete(book._id)} className='bg-red-600 py-1 font-semibold text-white rounded-sm
               hover:bg-sky-600
              '>Delete</button>

              

              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>

   
  );
};

export default ManageBooks;

