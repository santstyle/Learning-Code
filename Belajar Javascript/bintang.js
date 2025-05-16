// PANAH KANAN
var s ='';
for ( var i = 0; i < 10; i++){
    for (var j = 0; j <i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

var s ='';
for ( var i = 10; i > 0; i--){
    for (var j = 0; j <i; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s);
// EMD PANAH KANAN

// DIAMOND
var s ='';
var n =10;
for ( var i = 0; i <= n; i++){
    for (var j = 0; j < n - i; j++){
        s += ' ';
    }
    for ( var k = 0; k < 2 * i - 1; k++){
        s += '*';
    }
    s += '\n';
}
console.log(s);

var s ='';
var n =10;
for( var i = n; i >= 0; i--){
    for (var j = 0; j < n - i; j++){
        s += ' ';
    }
    for ( var k = 0; k < 2 * i - 1; k++){
        s +='*';
    }
    s += '\n';
}
console.log(s);
// END DIAMOND

var s ='';
for ( var i = 10; i > 0; i--){
    for (var j = 0; j <i; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s);

var s ='';
for ( var i = 0; i < 10; i++){
    for (var j = 0; j <i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);