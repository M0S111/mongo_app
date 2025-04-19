import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {type: String, required: true, minlength: 1, unique: true},
    password: {type: String, required: true, minlength: [8,'Password must be 8 characters or more']},
    createdAt: Date,
    updatedAt: Date
});

const User = mongoose.model('User',userSchema);

export default User;