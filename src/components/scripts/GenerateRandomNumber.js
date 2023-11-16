function GenerateRandomNumber(marketsArray) {
  var dataLength = marketsArray.length
  var min = Math.ceil(0)
  var max = Math.floor(dataLength)
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  return randomNumber
}

export default GenerateRandomNumber
