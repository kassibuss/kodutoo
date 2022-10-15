var y = Math.floor(Math.random() * 10) + 1;
console.log(y);

for (x=0; x<3; x++) 
var z = prompt("Arva ära number ühest kümneni");
if (y == z){
    console.log("Arvasid ära numbri");
}
else if (y+1 > z || y-1 < z)
    console.log("Sa pakkusid väga lähedale, proovi uuesti")
else {
    console.log("Sa pakkusid valesti");
}