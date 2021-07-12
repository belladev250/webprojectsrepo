const mongoose= require('mongoose');
mongoose.pluralize();
mongoose.connect("mongodb://localhost/Users",{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>console.log('you have connected to the db successfully'))
.catch(err=>console.log('you failed to connect to the db'))
require('./User');
