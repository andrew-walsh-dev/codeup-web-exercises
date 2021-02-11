//like the fizzbuzz problem, but with Codeup
//divisible by 3, print CODE
//divisible by 2, print UP
//divisible by both, print CODEUP
//else, print the num

for (var i = 1; i < 100; i++) {
    if (i % 6 === 0) {
        console.log("CODEUP");
    }
    else if (i % 3 === 0) {
        console.log("CODE");
    }
    else if (i % 2 === 0) {
        console.log("UP");
    }
    else {
        console.log(i);
    }
}