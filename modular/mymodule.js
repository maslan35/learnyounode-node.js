const fs = require('fs');
const path=require('path');

module.exports=function(directory,prefix,callback){
    var prefix='.' +prefix;
    fs.readdir(directory,function(err,list){
        if(err) return callback(err);
        
        list=list.filter(function(file){
            if(path.extname(file)===prefix){
                return true;
            }
            else{
                return false;
            }
        })
        return callback(null,list);
    });
}