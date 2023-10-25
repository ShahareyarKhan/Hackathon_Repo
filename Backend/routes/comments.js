const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchuser');
const Comments = require('../models/Comments');
const { body, validationResult } = require('express-validator');


router.get('/fetchallcomments', async (req, res) => {
    try {
        const comments = await Comments.find(); // Use a different variable name
        res.json(comments);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occurred");
    }
});

// Route to add a comment
router.post('/addcomment', fetchUser, [body('description').notEmpty().withMessage('Description is required'),],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { description,user } = req.body;
      const newComment = new Comments({
        description,user
      });
      const savedComment = await newComment.save();
      res.status(201).json(savedComment); // Respond with the saved comment
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occurred");
    }
  }
);

module.exports = router;
