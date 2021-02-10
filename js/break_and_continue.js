var num = 0;
while (num < 1 || num > 50 || num % 2 === 0) {
    num = Number(prompt("Enter an odd number between 1 and 50"));
}

for (i = 1; i < 50; i += 2) {
    if (i === num) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    console.log("Here is an odd number: " + i);
}