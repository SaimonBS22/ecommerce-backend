import mongoose, { Schema } from "mongoose";

const productoSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description:  {
        type: String
    },
    price:{
        type: Number
    },
})


const productosModel = mongoose.model('productos', productoSchema)

export default productosModel;