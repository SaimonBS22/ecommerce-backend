import express from 'express'
import productosModel from './models/productos.model.js'
import mongoose from 'mongoose'


// const app = express()

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// app.use(express.static('./src/public'))


// const PUERTO = 3030

// const httpServer = app.listen(PUERTO, () =>{
//     console.log(`Escuchando en el puerto: ${PUERTO}`)
// })

// app.use('/inicio', (req, res)=>{
//     res.send(`<h1>holaaa</h1>`)
//     console.log('holaa')
// })

const main = async ()=>{
    await mongoose.connect('mongodb+srv://simonblaksley:pepo300523@cluster0.1xoua.mongodb.net/productos')

    const respuesta = await productosModel.find()
    console.log(respuesta)
}
main()

