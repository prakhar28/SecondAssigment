const express = require('express');
const router = express.Router();
const documentModel = require('../dataModels/database');

router.get('/documents/:id', async (req, res) => {
    const documentId = req.params.id;
    try {
        const document = await documentModel.getDocumentById(documentId);
        res.render('view', { document });
    } catch (error) {
        // Handle errors appropriately
        res.status(500).send('An error occurred while fetching the document.');
    }
});

module.exports = router;
