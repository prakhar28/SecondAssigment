const express = require('express');
const router = express.Router();
const documentModel = require('../dataModels/database');

router.get('/documents', async (req, res) => {
  try {
    const documents = await documentModel.getAllDocuments();
    res.render('list', { documents });
  } catch (error) {
    // Handle errors appropriately
    res.status(500).send('An error occurred while fetching documents.');
  }
});

module.exports = router;
