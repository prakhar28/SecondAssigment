const express = require('express');
const router = express.Router();
const documentModel = require('../dataModels/database');

router.get('/documents/edit/:id', async (req, res) => {
    const documentId = req.params.id;
    try {
        const document = await documentModel.getDocumentById(documentId);
        res.render('edit', { document });
    } catch (error) {
        // Handle errors appropriately
        res.status(500).send('An error occurred while fetching the document for editing.');
    }
});

router.post('/documents/edit/:id', async (req, res) => {
    const documentId = req.params.id;
    const newContents = req.body.contents;
    const newTitle = req.body.title
    try {
        await documentModel.updateDocumentContents(documentId, newContents, newTitle);
        res.redirect(`/documents`);
    } catch (error) {
        // Handle errors appropriately
        res.status(500).send('An error occurred while updating the document.');
    }
});

module.exports = router;
