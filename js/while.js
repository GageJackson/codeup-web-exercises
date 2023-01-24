let i = 1;
let maxNumber = 65536;
while (i < maxNumber) {
  i = i * 2;
  console.log(i);
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var coneSale = Math.floor(Math.random() * 5) + 1;
console.log("This is how many cones i am starting with: " + allCones);

do {
  if (coneSale > allCones) {
    console.log(
      "Cannot sell you " + coneSale + " cones, I only have " + allCones
    );
  } else {
    allCones -= coneSale;
    console.log(coneSale + " cones sold...");
  }
  coneSale = Math.floor(Math.random() * 5) + 1;
} while (allCones > 0);

console.log("Yay! I sold them All!");
