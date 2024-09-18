import 'reflect-metadata'
import mongoose from 'mongoose'
import app from './app'

const port = 3000

mongoose
  .connect('mongodb://localhost:27017/stemolti-todo-app')
  .then((_) => {
    console.log('Connected to db')
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
  })
  .catch((err) => {
    console.error(err)
  })
