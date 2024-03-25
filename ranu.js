function calculatePrice(price,discountpercentage,taxpercentage){
discountpercentage = 0.05*price
taxpercentage = 0.08*price
const finalPrice= price + taxpercentage - discountpercentage

return finalPrice;
}
console.log(calculatePrice(2500))


/*
function printMesage(Message){
console.log("Mesage")
}
printMesage()(*)

function sendMessage("Welcome"){
console.log()
}
sendMessage()*/