var i = 1;
while (i <= 16) {
    console.log(2 ** i);
    i++
}

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I am starting the day with " + allCones + " cones.");
do {
    var sellCones = Math.floor(Math.random() * 5) + 1;
    if (sellCones <= allCones) {
        console.log(sellCones + " cones sold...");
    }
    else {
        console.log("Cannot sell you " + sellCones + " cones I only have " + allCones + "...");
        continue;
    }
    allCones -= sellCones;
    console.log("I now have " + allCones + " cones.");
} while (allCones > 0);
console.log("Yay! I sold all my cones!");