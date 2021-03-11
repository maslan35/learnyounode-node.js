const fs = require('fs');
const path=require('path');

var prefix="."+process.argv[3]

fs.readdir(process.argv[2],function(err,list){
    if(err) return console.error(err);
    else{
        list.forEach(function(file){
            if(path.extname(file)===prefix){
                console.log(file)
            }
        })
    }
})