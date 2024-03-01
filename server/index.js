import express from 'express';

import dotenv from "dotenv";
import cors from "cors";
import mongoose from 'mongoose';
import  {ObjectId}  from 'mongodb';
const port = process.env.PORT || 5000
const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
      res.send("hii")
})




mongoose.connect('mongodb+srv://<Enter your mongoUrl here>:gCiO36sCzUThRgw5@cluster0.crdo3c8.mongodb.net/BookInvertory', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  const bookSchema = new mongoose.Schema({
    authorName: String,
    imageUrl: String,
    category: String,
    description: String,
    title: String,
    pdfUrl: String
  });

  const Book = mongoose.model('Book', bookSchema);

  app.post("/upload-book", async (req, res) => {
    // const { authorName, imageUrl, category, description, title, pdfUrl } = req.body;

    // try {
    //   const newBook = new Book({
    //     authorName,
    //     imageUrl,
    //     category,
    //     description,
    //     title,
    //     pdfUrl
    //   });

    //   await newBook.save();

    //   res.status(201).send('Book uploaded successfully');
    // } catch (error) {
    //   console.error('Error uploading book:', error);
    //   res.status(500).send('Error uploading book');
    // } 

    try {
      const data = req.body;
      console.log(data); // Log the received data to verify its format
      const result = await Book.create(data);
      res.send(result);
  } catch (error) {
      console.error('Error uploading book:', error);
      res.status(500).send('Error uploading book');
  }
  });

  app.get("/books", async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      console.error('Error retrieving books:', error);
      res.status(500).send('Error retrieving books');
    }
  });

  app.patch("/books/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = {_id:new ObjectId(id)};
      

      const updateDoc = {
        $set:{
          ...updateBookData
        },
      }

      const option = {upsert:true};

      const result = await Book.updateOne(filter,updateDoc,option);
      res.send(result);

    
    } catch (error) {
      console.error('Error Updating the:', error);
      res.status(500).send('Error retrieving books');
    }
  });

  app.delete("/books/:id" , async(req,res)=>{
   try{
    const id = req.params.id;
    const filter = {_id : new ObjectId(id)};

    const result = await Book.deleteOne(filter);
    res.send(result)
   }catch(e){
      console.log(`Some error : ${e}`);
      res.status(500).send("Error deleting the book")
   }
  });

  app.post("/uplode-books", async(req,res)=>{
    try {
      const books = req.body; 
  
      
      for (const book of books) {
        const newBook = new Book(book);
        await newBook.save();
      }
  
      res.status(201).send('Books uploaded successfully');
    } catch (error) {
      console.error('Error uploading books:', error);
      res.status(500).send('Error uploading books');
     }
     
  });

  app.get("/all-booksc", async (req, res) => {
    try {
      let query = {};
      if (req.query.category) {
        query = { category: req.query.category };
      }
      const result = await Book.find(query);
      res.send(result);
    } catch (error) {
      console.error(`Error getting the books: ${error}`);
      res.status(500).send("Error showing the books");
    }
  });

  app.delete("/delete-all-books", async (req, res) => {
    try {
      const result = await Book.deleteMany({});
      res.send(result);
    } catch (error) {
      console.error(`Error deleting all books: ${error}`);
      res.status(500).send("Error deleting all books");
    }
  });

  app.get("/books/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const filter = {_id : new ObjectId(id)};
      const books = await Book.findOne(filter);
      res.json(books);
    } catch (error) {
      console.error('Error retrieving books:', error);
      res.status(500).send('Error retrieving books');
    }
  });



})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});






app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})
