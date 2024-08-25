const express = require('express');
const p = require('path-direct');
const app = express();

app.use(express.static(p.join(__dirname, 'src')));
app.get('/', (req, res) => {res.sendFile(p.join(__dirname, 'src', 'index.html'));});

app.listen(3000, () => {
    console.log(`server is running`);
});
