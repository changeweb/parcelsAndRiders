import mongoose from 'mongoose'
import { seedDb } from '../seeds/seeds'
const { DB, DB_USER, DB_PASS, DB_PORT } = process.env

// Database connection URL
const url: string = `mongodb://${DB_USER}:${DB_PASS}@mongodb:${DB_PORT}/${DB}`

// Connect to database
mongoose.connect(url)
  .then(() => {
    console.log('Database connection established')
    seedDb()
  })
  .catch((err: Error) => console.log(`Database connection error: ${err.message}`))

// Export Mongoose instance
export default mongoose
