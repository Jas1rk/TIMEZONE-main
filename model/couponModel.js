const mongoose = require('mongoose')
const couponSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    cname:{
        type:String
    },
    startdate:{
        type:String
    },
    enddate:{
        type:String
    },
    minimumpurchase:{
        type:Number
    },
    ccode:{
        type:String
    },
    isblocked:{
        type:Boolean,
        default:false
    }
},{versionKey:false})

const Coupon = mongoose.model('Coupon',couponSchema)
module.exports = Coupon