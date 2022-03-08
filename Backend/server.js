// import connectDB from './Backend/db.js'
// connectDB()
import connectDB from './Backend/config/db.js'
import userRoutes from './backend/routes/userRoute.js'
import express from 'express'
import dotenv  from 'dotenv'

//connect database
connectDB()
//dotenv config
dotenv.config()

const app = express()

//Creating API for user
// app.use('/api/users', userRoutes)
app.use('/api/Forms',userRoutes)


const PORT = process.env.PORT || 3001

//Express js listen method to run project on http://localhost:3000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))