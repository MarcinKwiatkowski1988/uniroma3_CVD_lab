var apply = function(array){
  var fun = array[0];
  var arg = array[1];
  return fun(arg);
}


// aa(function (x) {return x*2;})([1,3,5,7,9]); //[2,6,10,14,18]
var aa = function(fun){
  return function(array){
    var ret;
    ret = array.map(fun);
    return ret;
  }
}


// comp2 ([f, g])(x) --> f(g(x))
var comp2 = function (arrArgs){
  var f = arrArgs[0];
  var g = arrArgs[1];
  return function(x){
    return f(g(x));
  }	
} 


// compN 
var comp2 = function (arrArgs){
  var finalFunction = arrArgs.reduce (function (f, g) {
    return function (x) {
      return f(g(x));
    };
  });  
  return function(x){
    return finalFunction(x);     
  };	
} 







































