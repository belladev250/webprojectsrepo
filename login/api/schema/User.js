const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let userSchema= new Schema({
   firstName:{
       type:String,
       required:[true,"it can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid']
   },

   lastName:{
       type:String,
       required:[true,"it can't be blank"],
       match: [/^[a-zA-Z0-9]+$/, 'is invalid']
   },

   userName:{
       type:String,
       required:[true,"it can't be blank"],
       match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
       lowercase:true
       

       },

       password:{
           type:String,
           required:true
       }


});

module.exports= mongoose.model('auths',userSchema);
