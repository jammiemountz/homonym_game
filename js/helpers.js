function randomizer(array) {
  var randomIndex = Math.floor(Math.random()*array.length);
  console.log(randomIndex)
  return array[randomIndex]
}
