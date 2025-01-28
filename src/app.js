import express from 'express'
import productosModel from './models/productos.model.js'
import mongoose from 'mongoose'
import cors from 'cors'


 const app = express()

 app.use(express.json())
 app.use(express.urlencoded({extended: true}))
 app.use(express.static('./src/public'))

 app.use(cors())
 app.use(cors({origin:'http://localhost:8081'}))

 const PUERTO = 3030

 const httpServer = app.listen(PUERTO, () =>{
     console.log(`Escuchando en el puerto: ${PUERTO}`)
 })

 mongoose.connect('mongodb+srv://simonblaksley:pepo300523@cluster0.1xoua.mongodb.net/productos')
 .then(()=>{console.log('Conectado a MongoDB')})
 .catch((err)=>{console.error('Error al conectar a MongoDB',err)})



 app.get('/productos', async (req, res)=>{
    try {
        const respuesta = await productosModel.find()
        res.send(respuesta)
    } catch (error) {
        console.error('Hubo un error al obtener los productos', error)
        res.send('Hubo un error al obtener los productos')
    }
 })



