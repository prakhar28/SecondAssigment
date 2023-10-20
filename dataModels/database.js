const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/docManager')

// Define the schema for the Document model
const documentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    contents: { type: String, required: true },
    lastUpdated: { type: Date, default: Date.now },
});

// Create a Mongoose model based on the schema
const Document = mongoose.model('documents', documentSchema);

// Function to create a new document
async function createDocument(title, contents) {
    try {
        const newDocument = new Document({ title, contents });
        return await newDocument.save();
    } catch (error) {
        throw error;
    }
}

// Function to retrieve all documents
async function getAllDocuments() {
    try {
        return await Document.find({});
    } catch (error) {
        console.error('Error while fetching documents:', error);
        throw error;
    }
}

// Function to retrieve a document by its ID
async function getDocumentById(documentId) {
    try {
        return await Document.findById(documentId);
    } catch (error) {
        throw error;
    }
}

// Function to update a document's contents
async function updateDocumentContents(documentId, newContents, newTitle) {
    try {
        return await Document.findByIdAndUpdate(documentId, { title: newTitle, contents: newContents, lastUpdated: Date.now() }, { new: true });
    } catch (error) {
        throw error;
    }
}

// Function to delete a document by its ID
async function deleteDocument(documentId) {
    try {
        return await Document.findByIdAndRemove(documentId);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createDocument,
    getAllDocuments,
    getDocumentById,
    updateDocumentContents,
    deleteDocument,
};
