var convert = function(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr += "%20";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(convert("this is great!"))

var newConvert = function(str) {
  return str.split("").map(function(el) {
    if (el === " ") {
      return "%20";
    } else {
      return el;
    }
  }).join('');
}

console.log(newConvert("this is great!"))
