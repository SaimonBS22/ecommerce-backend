import express from 'express'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const PUERTO = 3030

const httpServer = app.listen(PUERTO, () =>{
    console.log(`Escuchando en el puerto: ${PUERTO}`)
})

app.use('/inicio', (req, res)=>{
    res.send(`<h1>holaaa</h1>`)
    console.log('holaa')
})