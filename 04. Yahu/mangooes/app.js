const mongoose = require("mongoose");
// import { type } from './../node_modules/@types/whatwg-url/index.d';

// # ahjuwel771

mongoose.connect('mongodb+srv://ahjuwel771_db_user:ahjuwel771@cluster0.a878qi3.mongodb.net/')
        .then("Database connected successfully")
        .catch((e)=>console.log(e))

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age : Number,
    isActive : Boolean,
    tags : [String],
    createdAt : {type: Date, default: Date.now}
});

// * create model
const User = mongoose.model('User', userSchema);

//

async function runQueryExample(){
    try{
        
        const newUser = User.create({
            name: "Meherab",
            email: "meher@gmail.com",
            age : 23,
            isActive : true,
            tags : ["Developer", "Data Engineer"],
        });

        // await newUser.save();

        console.log("Created new user", newUser);

    }catch(e){
        console.log("Error =>", e)
    }finally{
        await mongoose.connection.close();
    }
}