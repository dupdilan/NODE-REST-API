const BookModel = require('../models/bookModel');


exports.getBookDetailsTable = (req,res,next) => {

  BookModel.find()
  .then(books => {
    if(books){
      res.status(200).json(books);
    } else {
      res.status(404).json({message : 'books not Found!'});
    }
  }).catch(error =>{
    res.status(500).json({
      message: "Fetching books failed!"
    });
  })
}

exports.addBook = (req,res,next) => {
  // console.log(req.body.title);
  const book = new BookModel({
    title: req.body.title,
    author: req.body.author,
    cost:  req.body.cost ,
    sales:  req.body.sales ,

  });
  book.save()
  .then(createdBook => {
    res.status(201).json({
      message: 'Book Added Succesfully',
      data: {
        ...createdBook,
        id:createdBook._id
      }
    });
  }).catch(error => {
    res.status(500).json({
      message: 'creating a event failed!'
    });
  })


}
