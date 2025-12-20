var name1 = prompt("Enter the first name: ")
var name2 = prompt("Enter the second name: ")

name1 = String(name1).charAt(0).toUpperCase() + String(name1).slice(1,name1.length).toLowerCase()
name2 = String(name2).charAt(0).toUpperCase() + String(name2).slice(1,name2.length).toLowerCase()

var random_num = Math.random()
var love_score = Math.floor(random_num * 100) + 1
alert(name1 +" and " + name2 + "'s Love score is " + love_score + "%");