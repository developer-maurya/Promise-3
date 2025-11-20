var ans = new Promise((res,rej)=>{
var n = Math.floor(Math.random()*10);
 if(n<5){
   return res();
 }
 else{
  return rej();
 }
})

ans
.then(function () {
  console.log("above");
  
})
.catch(function() {
  console.log("small");
  
  
})


// 1 pahale utho 

// 2 washroom jaav
// 3 cooked food
// 4go duty

var daiy = new Promise(function(res,req){
  return res("pahale utho")
})
var pro2 = daiy.then(function(data) {
  console.log(data);
  return  new Promise(function(res ,req) {
    return res("washroom jaav");
    
    
  })
  })
  var pro3 = pro2.then(function(data) {
    console.log(data);
   return new Promise (function(res , req) {
    return res("cookes food");
    
    
   }) 
    
  })

 pro3.then(function(data) {
    console.log(data);
    
    
  })
  daiy.catch(function(err) {
    console.log("Pending");
    
    
  })