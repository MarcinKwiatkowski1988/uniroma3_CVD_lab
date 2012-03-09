// prendere dall'array tutti i numeri positivi e farne la somma

var numbers = [1,2,3,4,5,4,3,2,1];

var filterResult = numbers.filter(function(item, index, array){
  return (item % 2 == 0);
  });

var sum = filterResult.reduce(function(prev, cur, index, array){
  return prev + cur;
  });