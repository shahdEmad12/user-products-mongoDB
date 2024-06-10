import Product from "../../../DB/models/product.model.js";
import User from "../../../DB/models/user.model.js";

//..........................add product.........................
export const addProduct = async(req,res,next)=>{
    try{
    const {name,description,price,userID} = req.body
    const user = await User.findById(userID)
    if(!user){
        res.json({message:'user not found'})
    }
    const newProduct = await Product.create({name,description,price,userID})
    res.json({
        message:'added successfully',
        newProduct
    })
} catch(error){
    res.json({message:'fail', error})
}
}

//..............................delete product..........................
export const deleteProduct = async(req,res,next)=>{
    const {_id, userid}= req.query
    const deleting = await Product.findOneAndDelete({_id, userID:userid})
    if(!deleting){
        res.json({message:'delete failed'})
    }
    res.json({
        message:'deleted successfully',
        deleting
    })
}

//.........................update product.............................
export const updatingProduct = async(req,res,next)=>{
    const {_id, userid}= req.query
    const {name,description,price} = req.body
    const updating = await Product.findOneAndUpdate({_id, userID:userid},{name,description,price},{new:true})
    if(!updating){
        res.json({message:'updating failed'})
    }
    res.json({
        message:'updated successfully',
        updating
    })
}

//...........................get all products.....................
export const listProduct = async (req,res,next)=>{
    const data = await Product.find()
    res.json({
        message:'done',
        data
    })
}

//..........................get products with owners.......................
export const listProductWithUser = async(req,res,next)=>{
    const productWithUser = await Product.find().populate([{path:'userID'}])
    res.json({
        message:'done',
        productWithUser
    })
}

//.........................update product.............................
export const updateProduct = async(req,res,next)=>{
    const {_id, userid}= req.query
    const {name,description,price} = req.body
    const update = await Product.findOneAndUpdate({_id, userID:userid},{name,description,price},{new:true})
    if(!update){
        res.json({message:'updating failed'})
    }
    res.json({
        message:'updated successfully',
        update
    })
}


//.........................order descendingly.......................
export const getProductsDescending = async (req, res) => {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({
        products
    });
}
