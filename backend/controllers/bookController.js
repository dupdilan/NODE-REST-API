const BookModel = require('../models/bookModel');


exports.getBookDetailsTable = (req,res,next) => {

  BookModel.find()
  .then(bookDeatails => {
    // console.log(bookDeatails);
    if(bookDeatails){
      res.status(200).json({message: 'Books Fetched Successfully',data: bookDeatails});
    }else {
      res.status(404).json({message : 'Books not Found!'});
    }
  }).catch(error => {
    res.status(500).json({
      message: "Fetching Books falied!"
    });
  });
  // console.log("works");
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
