// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const newdriver=[]
  drivers.map (function(driver){
     newdriver.push(driver.toLowerCase())
  })
  return newdriver
}
