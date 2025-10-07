import express from 'express' // importação do módulo express
import cors from 'cors'
import path from 'path'

const app = express() // cria a API
const PORT = 3000 // porta em que o servidor roda

app.use(cors()) // habilitar solicitações entre sites pra chamadas fetch entre origens diferentes
app.use(express.json()) // dados são no formato JSON

app.get('/', (req, res) => {
  res.redirect('/v1/registration')
})

app.use(express.static(path.join(import.meta.dirname, '../../dist')))

app.get('/v1/registration', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, '../../dist/index.html'))
})

app.post('/v1/post/registration', (req, res) => {
  const { email, name, number, date, phoneNumber, password } = req.body // dados do formulário
  if (!email || !name || !number || !date || !phoneNumber || !password) {
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

app.listen(PORT, () => console.log('servidor ativo')) // indica que o servidor está rodando na porta 3000
