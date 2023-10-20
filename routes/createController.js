const express = require('express');
const router = express.Router();
const documentModel = require('../dataModels/database');

router.get('/documents/new', (req, res) => {
    res.render('create');
});

router.post('/documents', async (req, res) => {
    const { title, contents } = req.body;
    try {
        const newDocument = await documentModel.createDocument(title, contents);
        res.redirect(`/documents`);
    } catch (error) {
        // Handle errors appropriately
        res.status(500).send('An error occurred while creating the document.');
    }
});

module.exports = router;
