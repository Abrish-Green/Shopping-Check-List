const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const API = express.Router()
const port = process.env.PORT
const connectDB = require('./config/mongodb')
var cors = require('cors')

const item = require('./route/item')
app.use(express.json());
app.use(cors())

app.use((req,res,next)=>{
  console.log(req.url)
  next()
})
app.use('/',item)
try{
  connectDB()
}catch(err){
  console.log("reconnecting to server wait...")
  connectDB()
}


app.listen(port, () => {
  console.log(`Development Port:${port}`)
})