// write your code below!
function happyHolidays(){
  return 'Happy holidays!'
}

function happyHolidaysTo(name){
  return 'Happy holidays, ${name}!'
}

function happyHolidayTo(name, holiday){
 return 'Happy ${holiday}, ${name}!' 
}

function holidayCountdown(days, holiday){
  return 'It\'s ${days} days until ${holiday}!'
}

console.log(happyHolidays())
console.log(happyHolidaysTo('Brian'))
happyHolidayTo('Brian', 'Halloween')
holidayCountdown(100, 'Halloween')