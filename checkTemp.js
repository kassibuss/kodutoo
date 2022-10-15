function checkTemp(x) {
if (x >= 0 && x <= 20) {
    console.log("-1") //Liiga külm
    return -1
  } else if (x >= 21 && x <= 40) {
    console.log("0") //Paras
    return 0 
  } else if (x >= 41 && x <= 60){
    console.log("1") //Liiga kuum
    return 1
  }
}
