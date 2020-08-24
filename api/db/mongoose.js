//upravljanje logikom konekcije sa MongoDB bazom

const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', {useNewUrlParser: true}).then(()=>{
console.log("Uspesno konektovan na MongoDB");
}).catch((e)=>{
    console.log("Greska prilikom konektovanja");
    console.log(e);
});

// da se spreci depric. (iz MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports={
mongoose
};