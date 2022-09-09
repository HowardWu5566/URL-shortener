const express = require('express')
const app = express()
const port = 3000
require('./config/mongoose')
const URL = require('./models/URL')
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const origin = req.get('origin')
  const originalURL = req.body.originalURL
  const shortURL = require('./utils/shortURL')
  // 輸入重複的網址時，從資料庫找出來並產生一樣的縮址
  URL.findOne({ originalURL })
    .lean()
    .then((data) =>
  // 輸入新網址時在資料庫建立一筆新資料
      data ? data : URL.create({ originalURL, shortURL: shortURL(5) })
    )
    .then((data) =>
      res.render('index', { originalURL, shortURL: data.shortURL, origin })
    )
    .catch((error) => console.log(error))
})

app.get('/:shortURL', (req, res) => {
  const condition = req.params
  URL.findOne(condition)
    .lean()
    .then((data) => res.redirect(data.originalURL))
    .catch((error) => console.log(error))
})

app.listen(port, () => {
  console.log('success')
})
