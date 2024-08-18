const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/feedback', (req, res) => {
    // Here, you can add code to save feedback to a database or send an email
    console.log(req.body);
    res.send('Feedback received!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
