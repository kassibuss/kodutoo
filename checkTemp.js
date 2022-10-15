function checkTemp(x) {
if (x >= 0 && x <= 20) {
    return -1
  } else if (x >= 21 && x <= 40) {
    return 0 
  } else if (x >= 41 && x <= 60){
    return 1
  }
}
