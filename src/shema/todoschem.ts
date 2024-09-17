import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title: String,
    isDone: Boolean,
})

const Todo = mongoose.models.users || mongoose.model("users", userSchema);

export default Todo;