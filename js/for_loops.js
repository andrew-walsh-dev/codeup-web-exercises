function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " * " + i + " = " + num * i);
    }
}

function isEven(num) {
    if (num % 2 === 0) {
        return " is even.";
    }
    else {
        return " is odd.";
    }
}

for (var i = 0; i < 10; i++) {
    var random = Math.floor(Math.random()*181 + 20);
    console.log(random + isEven(random));
}

for (var i = 1; i < 10; i++) {
    for (var j = 1; j <= i; j++) {
        num = i.toString().repeat(i);
    }
    console.log(num);
}

for (var i = 100; i > 0; i -= 5) {
    console.log(i);
}