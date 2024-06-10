import express from 'express'
import db_connection from './DB/connection.js'
import userRouter from './src/modules/users/user.routes.js'
import proRouter from './src/modules/products/product.routes.js'
const app = express()
app.use(express.json())
app.use('/user',userRouter)
app.use('/product',proRouter)
db_connection()
const port = 3000
app.listen(port,()=>console.log(`server running on port ${port}`))