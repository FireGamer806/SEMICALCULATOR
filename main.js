var input1=document.querySelector(".in1")
var input2=document.querySelector(".in2")
var add=document.querySelector(".plus")
var subtract=document.querySelector(".minus")
var multiply=document.querySelector(".times")
var divide=document.querySelector(".division")
var result=0
var solution=document.querySelector(".result")
add.onclick=function(){
result=parseInt(input1.value)+parseInt(input2.value)
console.log(result)
solution.innerHTML=`result = ${result}`


}

subtract.onclick=function(){
result=parseInt(input1.value)-parseInt(input2.value)
console.log(result)
solution.innerHTML=`result = ${result}`
}

multiply.onclick=function(){
result=parseInt(input1.value)*parseInt(input2.value)
console.log(result)
solution.innerHTML=`result = ${result}`
}

divide.onclick=function(){
result=parseInt(input1.value)/parseInt(input2.value)
console.log(result)
solution.innerHTML=`result = ${result}`
}