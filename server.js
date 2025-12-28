const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3456;

// Serve static files
app.use(express.static(__dirname));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Quest RPG running on port ${PORT}`);
});
