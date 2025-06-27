const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 3000;  

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  }
})

const upload = multer({storage: storage});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.post('/upload', upload.single('resume'),  (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.redirect('/');
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});