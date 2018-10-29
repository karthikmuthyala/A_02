function Loancalculator()
{
let amount = document.getElementById("amount").value;
let intrest = document.getElementById("intrest").value;

//to caliculate intrest formula I = PTR/100

let I = (amount*12*intrest)/100;

alert("The amount user entered is : "+amount+"\nIntrest rate user entered is : "+intrest+"\nTime for : 12 months\nTotal amount after intrest calculation is : "+I);



}