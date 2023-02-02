// const app =require('./app')


// // var a=10;
// // var b=20;
// // console.log(a+b);

// // console.log(app.x)


// var arr=['a', 'b', 'c', 'd', 'e',]

// arr.filter((item)=>{
//     return item 
// })


// ----------global and non global------------------//
// const fs =require("fs")
// // console.log("hello");
// fs.writeFileSync("code.text","love")

// console.log("hi",__filename)




//--------------make basic server----------------

const http =require("http");
http.createServer((req,recp)=>{
  recp.write("hello");
  recp.end();
}).listen(4500);


