//console.log("Hello js")
//console.log("Hi js")

//宣告變數(let,const,var)

//let name='codeshiba'
//console.log(name)

//let sentence ='今天過得如何,很高興見到你,希望你有美好的一天!'
//console.log(name+" "+sentence)

//內建方法介紹 prompt() 和 alert()

//fruit=prompt("你最喜歡的水果是甚麼?")
//console.log(fruit)
//alert(fruit)

//第一個小程式小費計算器

let food=parseInt(prompt("這餐吃了多少錢?"))
let tipPercentage=parseInt(prompt("小費幾%"))/100
let tipTotal=food*tipPercentage
let total=food+tipTotal
console.log("小費金額:"+tipTotal)
console.log("總金額:"+total)