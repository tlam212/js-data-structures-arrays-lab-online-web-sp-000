
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  let newDriver = [...drivers, name]
  return newDriver
}

function prependDriver(name){
  let firstDriver = [name, ...drivers]
  return firstDriver
}

function removeLastDriver(){
  let newArr = drivers.slice(0, drivers.length - 1)
  return newArr
}

function removeFirstDriver(){
  let arr = drivers.slice(1)
  return arr
}
