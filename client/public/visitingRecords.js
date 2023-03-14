// import fs from fs;
import "http://pv.sohu.com/cityjson?ie=utf-8";

const fs = require('fs');
var myDate = new Date();
var mytime=myDate.toLocaleString();
fs.writeFile( './visitingRecords.txt' , 
    mytime+": "+returnCitySN["cip"]+', '+returnCitySN["cname"] , 
    function(err) {
        if(err){
            return console.log(	'文件写入失败！'   +  err.message)
        }
        console.log( '文件写入成功！')
    });
