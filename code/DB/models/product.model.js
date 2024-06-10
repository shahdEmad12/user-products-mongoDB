import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    description:{
        type: String
    },
    price:{
        type: Number,
        required: true
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product