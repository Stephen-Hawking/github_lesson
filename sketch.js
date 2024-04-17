// a=1
// b=L
// c=!
// d=#
// e=>
// f=*
// g=^
// h=@
// i=b
// j=2
// k=&
// l=%
// m=<
// n=/
// o=?
// p=+
// q=4
// r=$
// s=3
// t=2
// u=5
// v=6
// w=P
// x=]
// y=_
// z=~
function setup() {
  createCanvas(400, 400);
}

function encode(word){
  var new_word=word;
  console.log(new_word)
  new_word=new_word.replaceAll("A","1")
  new_word=new_word.replaceAll("a","1")
  new_word=new_word.replaceAll("B","L")
  new_word=new_word.replaceAll("b","L")
  new_word=new_word.replaceAll("C","!")
  new_word=new_word.replaceAll("c","!")
  new_word=new_word.replaceAll("D","#")
  new_word=new_word.replaceAll("d","#")
  new_word=new_word.replaceAll("E",">")
  new_word=new_word.replaceAll("e",">")
  new_word=new_word.replaceAll("F","*")
  new_word=new_word.replaceAll("f","*")
  new_word=new_word.replaceAll("G","^")
  new_word=new_word.replaceAll("g","^")
  new_word=new_word.replaceAll("H","@")
  new_word=new_word.replaceAll("h","@")
  new_word=new_word.replaceAll("I","b")
  new_word=new_word.replaceAll("i","b")
  new_word=new_word.replaceAll("J","2")
  new_word=new_word.replaceAll("j","2")
  new_word=new_word.replaceAll("K","&")
  new_word=new_word.replaceAll("k","&")
  new_word=new_word.replaceAll("L","%")
  new_word=new_word.replaceAll("l","%")
  new_word=new_word.replaceAll("M","<")
  new_word=new_word.replaceAll("m","<")
  new_word=new_word.replaceAll("N","/")
  new_word=new_word.replaceAll("n","/")
  new_word=new_word.replaceAll("O","?")
  new_word=new_word.replaceAll("o","?")
  new_word=new_word.replaceAll("P","+")
  new_word=new_word.replaceAll("p","+")
  new_word=new_word.replaceAll("Q","4")
  new_word=new_word.replaceAll("q","4")
  new_word=new_word.replaceAll("R","$")
  new_word=new_word.replaceAll("r","$")
  new_word=new_word.replaceAll("S","3")
  new_word=new_word.replaceAll("s","3")
  new_word=new_word.replaceAll("T","2")
  new_word=new_word.replaceAll("t","2")
  new_word=new_word.replaceAll("U","5")
  new_word=new_word.replaceAll("u","5")
  new_word=new_word.replaceAll("V","6")
  new_word=new_word.replaceAll("v","6")
  new_word=new_word.replaceAll("W","P")
  new_word=new_word.replaceAll("w","P")
  new_word=new_word.replaceAll("X","]")
  new_word=new_word.replaceAll("x","]")
  new_word=new_word.replaceAll("Y","_")
  new_word=new_word.replaceAll("y","_")
  new_word=new_word.replaceAll("Z","~")
  new_word=new_word.replaceAll("z","~")
  return new_word
}
var encoded_word=encode(prompt("give word to encode"))
console.log(encoded_word)
function draw() {
  background(220);
}