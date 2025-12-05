const fs = require("fs");

// fs.writeFileSync('./radhe.txt',"radhe radhe")

// fs.writeFile('trona.txt','hey there! iam here',(err) => {});


// const result = fs.readFileSync('./contacts.txt','utf-8');
// console.log("contact no is ",result);

fs.readFile('./contacts.txt','utf-8',(err,result)=>{
    if(err){
        console.log('error',err);
    }
    else{
        console.log("the result is ",result);
    }
});