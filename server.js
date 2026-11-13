require('dotenv').config();

const path = require('node:path');
const express = require('express');

const app = express();
const publicDirectory = path.join(__dirname, 'public');
const port = Number(process.env.PORT) || 3000;

app.use(express.static(publicDirectory));
app.get('*', (_request, response) => {
  response.sendFile(path.join(publicDirectory, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Welcome page listening on port ${port}`);
});
