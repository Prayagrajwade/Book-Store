import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

import { useState } from 'react'

import userImg from '../assets/profile.jpg'
import axios from 'axios';

import { Sidebar, Textarea } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';


const EditBooks = () => {

  const {id} = useParams();
  const {authorName,imageUrl,category,description,title,pdfUrl} = useLoaderData();
  const bookcategories = [
    "Friction",
    "Non-Frection",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibligraphy",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
];

const [selectedBookCategory,setselectedBookCategory] = useState(bookcategories[0]);

const handleChangesSelectedValue = (event) => {
 console.log(event.target.value);
 setselectedBookCategory(event.target.value)
}

const handleUpdate = (event) => {
 event.preventDefault();
 const form = event.target;
 const title = form.querySelector('#title').value;
 const authorName = form.querySelector('#authorName').value;
 const imageUrl = form.querySelector('#imageUrl').value;
 const category = form.querySelector('#inputState').value;
 const description = form.querySelector('#description').value;
 const pdfUrl = form.querySelector('#pdfUrl').value;


const bookObj = [
 title,authorName,imageUrl,category,description,pdfUrl
]

console.log(bookObj);

fetch(`http://localhost:5000/books/${id}`, {
    method: "PATCH",
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({
        title: title,
        authorName: authorName,
        imageUrl: imageUrl,
        category: category,
        description: description,
        pdfUrl: pdfUrl
    })
}).then(res => {
    console.log(res);
    return res.json();
}).then(data => {
    console.log(data);
    alert("Book Updated successfully!!");
}).catch(error => {
    console.error('Error Updating book:', error);
    alert("Error updating book. Please try again later.");
});


  
}
return (
 <div className='px-4 my-12'>
   <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

   <form onSubmit={handleUpdate} className="flex lg:w-[1180] flex-col flex-wrap gap-4">
    <div className='flex gap-8'>

    <div className='lg:w-1/2'>
     <div className="mb-2 block">
       <Label htmlFor="title" value="Book Title" />
     </div>
     <TextInput id="title" name = "title" type="text" placeholder="Book name" defaultValue={title} required />
   </div>

   <div className='lg:w-1/2'>
     <div className="mb-2 block">
       <Label htmlFor="authorName" value="author Name" />
     </div>
     <TextInput id="authorName" name = "authorName" type="text" placeholder="author Name" defaultValue={authorName} required />
   </div>

    </div>


    <div className='flex gap-8'>

    <div className='lg:w-1/2'>
     <div className="mb-2 block">
       <Label htmlFor="imageUrl" value="image Url" />
     </div>
     <TextInput id="imageUrl" name = "imageUrl" type="text" placeholder="image Url" defaultValue={imageUrl} required />
   </div>

   <div className='lg:w-1/2'>

   <div className="mb-2 block">
   <div className="mb-2 block">
       <Label htmlFor="inputState" value="Book Category" />
     </div>

     <select name="categoryName" id="inputState" className='w-full rounded value={selectedBookCategory}'
      onChange={handleChangesSelectedValue}
     >

      {
       bookcategories.map((option) => 
        <option key={option} value={option}>{option}</option>
       )
      }

     </select>
   </div>
    
   </div>

   



   


    </div>


    <div>
    <div className="mb-2 block">
       <Label htmlFor="description" value="Book description" />
     </div>

     <Textarea 
     id="description" 
     name = "description"
     placeholder='Leave a comment'
     required
     className='w-full'
     rows={6}
     defaultValue={description}
     />
   </div>

   <div>
   <div className="mb-2 block">
       <Label htmlFor="pdfUrl" value="pdfUrl" />
     </div>
     <TextInput id="pdfUrl" name = "pdfUrl" type="text" placeholder="pdfUrl" defaultValue={pdfUrl} required />
   
   </div>


    
  <Button type = "submit" className='mt-5'>
    Update Book 
  </Button>

   
 </form>
 </div>
)
}

export default EditBooks
