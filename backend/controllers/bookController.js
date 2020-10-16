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

}
