function checkDayOrMonthLength(it){
    if(it.length < 2)
        return 0 + it;
    return it;
}

function formatDate(date){
    let days = checkDayOrMonthLength(new String(date.getDate()));
    let mon = checkDayOrMonthLength(new String(date.getMonth() + 1));
    let year = new String(date.getFullYear());
    return days + '.' + mon + '.' + year.slice(2);
}

function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}

function wordToLowerCase(str){
    let strWithoutReg = "";
    for(let i = 0; i < str.length; i++)
        strWithoutReg += str[i].toLowerCase();
    return strWithoutReg;
}

function checkSpam(str){
    return forbiddenWords.some(forbWord => 
    { if(wordToLowerCase(str).match(wordToLowerCase(forbWord))) return true; return false;});
}

function extractCurrencyValue(str){
    return parseInt(str.match(/\d+/));
}

const forbiddenWords = ['viagra', 'xxx'];

var date = new Date();
console.log(formatDate(date));
var str = 'вася';
console.log(ucFirst(str));
console.log(checkSpam('r21323Viagra 123'));
console.log(extractCurrencyValue("$123"));