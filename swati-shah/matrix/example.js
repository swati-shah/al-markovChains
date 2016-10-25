// load math.js
var math = require('./math.js');

console.log('create a matrix');
var p = math.matrix([[1,0,0,0], 
					 [0.5,0,0.5,0],
					 [0,0.5,0,0.5],
					 [0,0,0,1]]);
print(p);

// the matrix can be retrieved using valueOf()
console.log('retrieve matrix data');
var array = p.valueOf();
print(array);

// matrices can be cloned
console.log('matrices can be cloned');
var clone = p.clone();
print(clone);

// matrix multiplication
 console.log('matrix multiplication');
 // var result = math.multiply(p, p);
 // print(result);

 // for (var i=1;i<10;i++)
 // {
 // 	var result=math.multiply(result,p);
 // }

 // console.log ('Final Result using my method');
 // print(result);


function power(x,matrix)
{
	var result=math.multiply(matrix,matrix);
	x-=2;
	for (var i=0;i<x;i++){
		result=math.multiply(result,matrix);
	}
	return result;
}

var markov=power(50,p);
print (markov);

var is1 = math.matrix([0,1,0,0]); 
result1=math.multiply(is1,markov);

var is2 = math.matrix([0,0,1,0]); 
result2=math.multiply(is2,markov);

console.log ('Final Result if I start from 25');
print (result1);

console.log ('Final Result if I start from 50');
print (result2);

function print (value) {
  var precision = 3;
  console.log(math.format(value, precision));
  //console.log(value._data);   
}