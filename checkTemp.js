function checkTemp(x) {
if (x >= 0 && x <= 20) {
    return console.log("-1") //Liiga külm
  } else if (x >= 21 && x <= 40) {
    return console.log("0") //Paras
  } else if (x >= 41 && x <= 60){
    return console.log("1") //Liiga kuum
  }
}