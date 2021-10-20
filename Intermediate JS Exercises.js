// countDown
function countDown(time){
    var timer = setInterval(function(){
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(time);
      }
  
    }, 1000);
  }
 countDown(3); 
// randomGame
function randomGame(time) {
    
    var timer=setInterval(function() {
        time= Math.random();
        time++;
        if(time > 0.75){
            clearInterval(timer);
            
        }
        else
        console.log(time);
    })
}
randomGame(2);
 
 //                          find

/*function find(array,val) {
   
    for(let i=0;i<array.lenght;i++){
     return array.filter(val);
       
    }
}
find([8,11,4,27], function(val){return val >= 10}); 
find([8,11,4,27], function(val){return val === 5}); 
*/

// isEven

function isEvent(number){
    var N=number;
    if(N%2==0){
        console.log("true");
    }
    else
    console.log("false");
}
isEvent(2);
isEvent(3);



// isOdd
function isOdd(number){
    var N=number;
    if(N%2!=0){
        console.log("true");
    }
    else
    console.log("false");
}
isOdd(3);
isOdd(14);

//   isPrime
function isPrime(number){
    var N=number;
    if(N%2!=0 && N>1){
        console.log("true");
    }
    else
    console.log("false");
}
isPrime(8);
isPrime(17);


 //                          numberFact
 function numberFact(num, fn){
    return fn(num);
  }
  numberFact(59,isEvent); 
numberFact(59,isOdd); 
numberFact(59,isPrime); 


//                          specialMultiply
function specialMultiply(a,number){
    if(number===undefined){
        return function(number){
            return a*number;
        }
           
    }
    else
   return a*number;
  
}
 console.log(specialMultiply(3,4)) ; 
console.log(specialMultiply(3)(4)) ;
console.log(specialMultiply(3));



 




