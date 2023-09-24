function receivesAFunction(cb) {
    return cb();
  }
  
   const add = (num1, num2) => num1 + num2;
  
   const result = receivesAFunction(add);
  console.log(result)



  function returnsANamedFunction() {
    return function printHI(){
        console.log("Hi")
    }
}

function returnsAnAnonymousFunction( ) {
  return function(num1, num2){return num1+num2};

}
const final = recievedAnAnomousFunction();