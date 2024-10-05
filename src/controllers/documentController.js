let documents = [
  { id: 1, name: 'Report Q1', status: 'completed', userId: 1 },
  { id: 2, name: 'Proposal', status: 'in progress', userId: 2 },
  { id: 3, name: 'Contract', status: 'review', userId: 1 },
  { id: 4, name: 'Budget 2024', status: 'draft', userId: 3 },
  { id: 5, name: 'Marketing Plan', status: 'approved', userId: 4 },
];

exports.createDocument = (req, res) => {
  const { name, status, userId } = req.body;
  const newDocument = { id: documents.length + 1, name, status, userId };
  documents.push(newDocument);
  res.status(201).json(newDocument);
};

exports.getAllDocuments = (req, res) => {
  res.json(documents);
};

exports.getDocumentById = (req, res) => {
  const document = documents.find(d => d.id === parseInt(req.params.id));
  if (document) {
    res.json(document);
  } else {
    res.status(404).json({ message: 'Document not found' });
  }
};

exports.updateDocument = (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;
  const documentIndex = documents.findIndex(d => d.id === parseInt(id));
  if (documentIndex !== -1) {
    documents[documentIndex] = { ...documents[documentIndex], name, status };
    res.json(documents[documentIndex]);
  } else {
    res.status(404).json({ message: 'Document not found' });
  }
};

exports.deleteDocument = (req, res) => {
  const { id } = req.params;
  const documentIndex = documents.findIndex(d => d.id === parseInt(id));
  if (documentIndex !== -1) {
    documents.splice(documentIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Document not found' });
  }
};
