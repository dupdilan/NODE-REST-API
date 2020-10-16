const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');

router.get("",BookController.getBookDetailsTable);
router.post("",BookController.addBook);

module.exports = router ;
