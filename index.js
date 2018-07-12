// Write your solution in this file!
var driver = {name: 'Sam', address: '11 Broadway'}

function updateDriverWithKeyAndValue(driver, key, value){
  var newDriver = Object.assign({}, driver ,{[key]: value})
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    var driver1 = Object.assign({}, driver ,{[key]: value})
  return driver1
}