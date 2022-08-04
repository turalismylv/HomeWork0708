const fullname = prompt("Enter your name");
const weight = prompt("Enter your weight");
const height = prompt("Enter your height(m)");
const bmr = parseInt(weight) / (parseFloat(height) * parseFloat(height));
console.log(bmr);
if (bmr < 18.5) {
    console.log(fullname, "You are UNDERWEIGHT")
}
else if (bmr > 18.5 && bmr < 24.9) {
    console.log(fullname, "You are NORMAL")
}
else if (bmr > 25 && bmr < 29.9) {
    console.log(fullname, "You are OVERWEIGHT")
}
else if (bmr > 30 && bmr < 34.9) {
    console.log(fullname, "You are OBESE")
}
else {
    console.log(fullname, "You are EXTREMELY OBESE")
}