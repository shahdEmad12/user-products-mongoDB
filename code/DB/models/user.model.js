import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        min: 3,
        max: 9
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type:String,
        default: 'Female',
        enum: ['female','Male']
    },
    phone:{
        type: Number,
        required: true
    }
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User