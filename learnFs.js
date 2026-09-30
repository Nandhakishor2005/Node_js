const fs = require("fs");
fs.readFile("text.txt","utf8",(err,data)=>
{
    if(err){
        console.log("error reading the file");
        return;
    }
    console.log(data);
})

fs.writeFile("text.txt","this is an example of fs module",(err)=>
{
    if(err){
        console.log("error occured");
        return;
    }
    console.log("data written sucessfully");
    
})

fs.readFile("text.txt","utf8",(err,data)=>
    {
        if(err){
            console.log("error reading the file");
            return;
        }
    console.log(data);

})