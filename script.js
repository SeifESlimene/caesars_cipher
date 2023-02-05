function rot13() {
  let str = document.getElementById("caesar").value.toUpperCase();
  let arrayStr = str.split("");
  let arrayNum = arrayStr.map((item) => {
    if (item.charCodeAt(0) < 65 || item.charCodeAt(0) > 90) {
      return item;
    }
    let num = item.charCodeAt(0) - 13;
    if (num < 65) {
      return String.fromCharCode(num + 26);
    } else {
      return String.fromCharCode(num);
    }
  });
  let result = arrayNum.join("");
  document.getElementById("result-fn").innerHTML = result;
}
