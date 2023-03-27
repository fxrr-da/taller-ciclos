var n1=1
var n2=1
var m=0
var i=0
 
var limite =parseInt(prompt("digite numero limite"))
for(i=1;n1<=limite;i++){
  console.log(n1)
  m=n1+n2
  n1=n2
  n2=m
}
