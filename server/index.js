const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const Product = require('./models/Product');

const dbURL = process.env.DB_URL || "mongodb://localhost:27017/react_task_tracker";
// mongodb://localhost:27017/yelp-camp
// const dbURL = process.env.DB_URL;
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("open", () => {
    console.log("Database connected");
})

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cors());
app.use(bodyParser.json())

const pdfTemplate = require('./documents');

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
})

// POST  - PDF generation and fetching of data

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});

// GET - Send generated PDF to client

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is running.")
  });

