import Product from "../../../DB/models/product.model.js";
import User from "../../../DB/models/user.model.js";

//....................... list users ........................
export const listUsers = async (req,res,next)=>{
    const data = await User.find()
    res.json({
        message:'done',
        data
    })
}

//....................... sign up .........................
export const signup = async(req,res,next)=>{
    const {username,email,password,age,gender,phone}= req.body
    const isEmailExist = await User.findOne({email})
    if(isEmailExist){
        res.json({message:'email already exists'})
    }
    const newUser = await User.create({username,email,password,age,gender,phone})
    res.json({
        message:'sign up successfully',
        newUser
    })
}

//......................signin.........................
export const signin = async(req,res,next)=>{
    const {email,password}= req.body
    const validOrNot = await User.find({email,password})
    if(validOrNot.length==0){
        res.json({message:'user not found'})
    }
    res.json({
        message:'signin successfully'
    })
}

//....................... update ........................
export const updateUser = async(req,res,next)=>{
    const {username,email,password,age,gender,phone}= req.body
    const{_id}= req.params
    const updating = await User.findByIdAndUpdate({_id},{username,email,password,age,gender,phone},{new:true})
    if(!updating){
        res.json({message:'updating failed'})
    }
    res.json({
        message:'updated successfully',
        updating
    })
}

//........................ delete ............................
export const deleteUser = async(req,res,next)=>{
    const {_id} = req.params
    const isUserExist = await User.findById({_id})
    if(!isUserExist){
        res.json({message:"user not found"})
    }
    const deleting = await User.findByIdAndDelete({_id})
    if(!deleting){
        return res.json({
            message: 'User delete fail',
            deleting
        })
    }

    res.json({
        message: 'User deleted successfully',
        deleting
    })
}

//............................search by x and y..........................
export const searchByXY = async (req,res,next)=>{
    const {name,age}= req.body
    const search = await User.find({username:name ,age:{$lt:age}})
    if(search.length==0){
        res.json({message:'user not found'})
    }
    res.json({
        search
    })
}

//............................search by age between...................................
export const searchByAge = async (req,res,next)=>{
    const {age1,age2}= req.query
    const search = await User.find({age:{$gt:age1,$lt:age2}})
    if(search.length==0){
        res.json({message:'user not found'})
    }
    res.json({
        search
    })
}

//...........................get users products...............................
export const getUserProducts = async (req,res,next)=>{
    const {id} = req.params
    const getProducts = await Product.find({userID:id})
    res.json({ getProducts });
}