const express = require('express');
const router = express.Router();
const documentModel = require('../dataModels/database');

// Delete a document - POST /documents/:id/delete
router.post('/documents/delete/:id', async (req, res) => {
    const documentId = req.params.id;
    try {
        // Perform the deletion operation based on the documentId
        await documentModel.deleteDocument(documentId);
        res.redirect('/documents'); // Redirect to the list of documents after deletion
    } catch (error) {
        // Handle errors appropriately
        res.status(500).send('An error occurred while deleting the document.');
    }
});


module.exports = router;
