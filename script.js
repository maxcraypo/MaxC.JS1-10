




//Sleep in
function sleep_in(weekday,vacation){
        if(!weekday||vacation){
            return (true);
        }else{
            return (false);
        }


}
//monkey trouble
function monkey_trouble(a_smile,b_smile){
    if(a_smile && b_smile || !a_smile && !b_smile){
        return (true);
    }esle{
        return (false);

    }
}
// string times
function string_times(string,number) {
    if (number >= 0) {
        var newString = "";
        for (var i = 0; i < number; i++) {
            newString = newString + string
        }
        return (newString);
    }
}

//front times

function front_times(string,number){
    if(number >= 0){
        var newString = "";
        var front = string.substring(0,3);
        for(var i = 0; i < number; i++ ){
            newString = newString + front;
        }
        return newString;
    }
}



//string bits
function string_bits(str) {
    var newString = "";
    for (var i = 0; i < str.length; i+=2) {
        newString = newString + str[i];
    }
    return newString;
}


// caught speeding
function caughtSpeeding(speed, birthday){
if(birthday == false){
    if(speed <= 60){
        return (0);
    }
    if(61 <= speed && speed <= 80){
        return(1);
    }
    if(speed >= 81) {
        return (2);
    }
    }else{
        if(speed <= 65){
            return (0);
        }
        if(speed > 65 && speed < 85 ){
            return(1);
        }
        if(speed >= 85 ) {
            return (2);
        }
    }
}

//fizzBuzz

function fizz_buzz(num){
    if(num % 3 == 0 && num  % 5 ==0){
        return "FizzBuzz";
    }
    if(num % 3 == 0 ){
        return "Fizz";
    }
    if(num % 5 == 0){
        return "Buzz";
    }
    if( num % 3 !== 0 && num % 5 !== 0 ){
        return num + "!";
    }
}

// tea party

function teaParty(candy, tea) {
    if (tea < 5 || candy < 5) {
        return 0;
    }
    if (tea >= 5 && candy >= 5) {
        return 1;
    }
    if (tea >= 2 * candy || tea * 2 <= candy) {
        return 2;
    }
}
// blackjack

function blackjack(num1,num2){
    var dif1= 21-num1;
    var dif2 = 21-num2;
    if (num1 <= 21 && num2 > 21){
    return num1;
}
    if( num1 > 21 && num2 <=21){
        return num2;
    }

    if(dif1 < 0 || dif2 < 0){
        return 0;
    }
    if( num1 <=21 && dif1 < dif2){
        return num1;

    }else {
        return num2;
    }
}
// lone some

function loneSum(a,b,c) {
    if(a==b && a==c ){
        return 0;
    }


    if (a == b){
        return c;
}
    if(a == c){
        return b;
    }
    if(b== a){
        return c;
    }
    if(b==c){
        return a;
    }
    if(c==a){
        return b;
    }
    if(c==b){
        return a;
    }
    return a + b + c;
}


//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}









