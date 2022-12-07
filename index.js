import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'));
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});