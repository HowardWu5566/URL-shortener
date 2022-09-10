const express = require('express')
const app = express()
const port = 3000
require('./config/mongoose')
const URL = require('./models/URL')
const exphbs = require('express-handlebars')
const shortURL = require('./utils/shortURL')

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const host = req.get('host')
  const originalURL = req.body.originalURL
  // 輸入重複的網址時，從資料庫找出來並產生一樣的縮址
  URL.findOne({ originalURL })
    .lean()
    .then(data =>
      // 輸入新網址時在資料庫建立一筆新資料
      data ? data : URL.create({ originalURL, shortURL: shortURL(5) })
    )
    .then(data =>
      res.render('index', { originalURL, shortURL: data.shortURL, host })
    )
    .catch(error => {
      console.log(error)
      res.render('error', { error: error.message })
    })
})

app.get('/:shortURL', (req, res) => {
  const condition = req.params
  const host = req.get('host')
  const shortURL = req.params.shortURL
  const errorMessage = `${host}/${shortURL} is not exist`
  URL.findOne(condition)
    .then(data =>
      data ? res.redirect(data.originalURL) : res.render('error', { errorMessage })
    )
    .catch(error => console.log(error))
})

app.listen(port, () => console.log('success'))
