module.exports = function toReadable (number) {

    let result = [];

    let num0to19 = {
        0:"zero", 1:"one", 2:"two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine", 10:"ten", 11:"eleven", 12:"twelve", 13:"thirteen",
        14:"fourteen", 15:"fifteen", 16:"sixteen", 17:"seventeen", 18:"eighteen", 19:"nineteen"};

    let tens = {
        2:"twenty", 3:"thirty", 4:"forty", 5:"fifty", 6:"sixty", 7:"seventy", 8:"eighty", 9:"ninety",}

    if(number < 20){
        result = num0to19[number];      
    }
    else if(number >= 20 && number < 100){
        result = tens[Math.floor(number/10)] + (number%10 ? " " + num0to19[number%10]:"");
    }
    else if(number >= 100){
        result = num0to19[Math.floor(number/100)] + " " + "hundred" + ( number%100 === 0 ? '' : " "+ toReadable(number%100));
    }
return result;
}
