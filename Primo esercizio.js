function Point (x,y){
  this.x = x || 0;
  this.y = y || 0;
  }


Point.prototype.getDistance = function (point){
  var distance;
  distance = Math.sqrt( Math.pow((this.x - point.x) , 2) + Math.pow( (this.y - point.y) ,2));

  return distance; 
  }


Point.prototype.translatePoint = function (dx, dy){
  this.x += dx;
  this.y += dy;

  return this; //cosi posso concatenare altri metodi
  }


function Triangle (p1,p2,p3){
  this.p1 = p1;
  this.p2 = p2;
  this.p3 = p3;
  }


Triangle.prototype.getPerimeter = function() {
  var lato1 = this.p1.getDistance(p2); 
  var lato2 = this.p1.getDistance(p3);
  var lato3 = this.p2.getDistance(p3);
  var perimeter;

  return perimeter = lato1 + lato2 + lato3;
  }
 
 
Triangle.prototype.getArea = function () {
  var lato1 = this.p1.getDistance(p2); 
  var lato2 = this.p1.getDistance(p3);
  var lato3 = this.p2.getDistance(p3);
  var area;
  var p = ( this.getPerimeter()/2 ) ;

  //Formula di ERONE
  // A = |p (p - l1) (p - l2) (p - l3)|
  return area = Math.sqrt(p * (p - lato1) * (p - lato2) * (p - lato3));
  }


//funzione random che genera un punto in un rage da -100 a 100
var random = Math.random;
var randomPoint = function () {
  
  return new Point ((random()*200)-100, (random()*200)-100);	
  }


// generare n punti random e memorizzarli in un array
var generaArrayPuntiRandom = function (n) {
  var n = n || 1;	
  var arrayGenerated = [];
  for (i=0; i<n, i++){
  	arrayGenerated.push(randomPoint());
    }

  return arrayGenerated;	
  }


// array di punti filtrato in base alla bisettrice
var points = generaArrayPuntiRandom(100);
var sopraLaBisettrice = function (array){
  var test = function (point){
    return point.y - point.x > 0 ;
  }
  var result = array.filter (function (item,index,array){
    return test(item);
  })

  return result ;
} 
  


// funzione che filtra i punti in base ad un'equazione generica
Point.prototype.doveSiTrovaIlPunto = function (m, q){
  var result;
  if (point.y > (m*point.x + q))
    return 1;
  if (point.y == (m*point.x + q))
    return 0;
  else
    return -1
}
// altra scrittura
Point.prototype.membership = function(funzioneRetta) {
  var result = funzioneRetta(this.x, this.y);
  return ((result > 0) ? 1 : (result === 0 ? 0 : -1));
} 
  

// funzione costruttrice che ha le proprieta a, b e c
var Line = function (a,b,c){ // se chiamiamo Line prima, sappiamo che esiste ma non conosciamo il contenuto
// function Line (a,b,c) {   // se chiamiamo Line prima, conosciamo anche il suo contenuto
  if (!(this instanceof Line)){  // serve se l'utente si scorda di invocare Line senza new
    return new Line (a,b,c)
  }
  this.a = a || 0;
  this.b = b || 0;
  this.c = c || 0;
  };
 

// distanza dal punto alla retta
 Point.prototype.distance = function (line) {
   var result;
   result = (Math.abs (line.a * this.x + line.b * this.y + line.c)) / (Math.sqrt(a^2 + a^2 ));
   return result;


 }