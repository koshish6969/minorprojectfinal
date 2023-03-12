const mongoose= require ("mongoose");
const Schema= mongoose.Schema;

const UserOtpSchema= new Schema({
    userId: String,
    otp: String,
    createdAt: Date,
    expiresAt: Date,
});

const Userotp=mongoose.model("Userotp", UserOtpSchema);
module.exports= Userotp;