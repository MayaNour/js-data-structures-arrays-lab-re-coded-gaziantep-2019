// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name)
{
  drivers.push(name);
}


function destructivelyPrependDriver(name)
{
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop(drivers.length - 1 );
}

destructivelyRemoveFirstDriver(){
  drivers.shift(0);
}
