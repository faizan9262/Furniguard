import express from 'express'
import dotevn from 'dotenv'
import cors from 'cors'
import mongoDBConnect from './config/mongodb.js'
import userRouter from './routes/user.route.js'
import productRouter from './routes/products.route.js'
import conntectCloadinary from './config/cloudinary.js'

dotevn.config()


const app = express()
mongoDBConnect()
conntectCloadinary()
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send('Backend is running')
})


app.use('/api/user',userRouter)
app.use('/api/products',productRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});