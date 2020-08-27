// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const newdriver=[]
  drivers.map (function(driver){
     newdriver.push(driver.toLowerCase())
  })
  return newdriver
}

function nameToAttributes(drivers){
  const newdriver={}
  drivers.map (function(driver){
    let name=driver.split(" ")
     newdriver.firstName=name[0]
     newdriver.lastName=name[1]
  })
  return newdriver
}
