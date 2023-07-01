let celsius = 29


if (celsius < -273.15) {
  console.log("Isso é impossível");
} else {
  let fahrenheit = (celsius * 1.8) + 32;
  console.log(celsius + " graus Celsius equivalem a " + fahrenheit + " graus Fahrenheit.");
}