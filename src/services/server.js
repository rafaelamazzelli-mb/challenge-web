import express from 'express'
import cors from 'cors'
import path from 'path'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.redirect('/v1/registration')
})

app.use(express.static(path.join(import.meta.dirname, '../../dist')))

app.get('/v1/registration', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, '../../dist/index.html'))
})

app.post('/v1/post/registration', (req, res) => {
  const { email, name, identificationNumber, date, phoneNumber, password } = req.body
  if (!email || !name || !identificationNumber || !date || !phoneNumber || !password) {
    {
      res.status(400).json({
        error: 'O servidor não pode encontrar o recurso solicitado',
      })
    }
  } else {
    res.status(201).json({
      message: 'A solicitação foi bem sucedida e um novo recurso foi criado',
      data: req.body,
    })
  }
})

app.listen(PORT, () => console.log('servidor ativo'))
