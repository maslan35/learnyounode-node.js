var myModule = require('./mymodule');


myModule(process.argv[2],process.argv[3],function(err,list){
    if(err){
        return console.error(err);
    }
    list.foreach((file) =>{
        console.log(file);
    });
});