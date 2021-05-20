function getAge(birthDate) {
  const timeElapsed = 365.25 * 24 * 60 * 60 * 1000
  const dateStart = new Date(birthDate).getDate()
  const monthStart = new Date(birthDate).getMonth()
  const dateNow = new Date().getDate()
  const monthNow = new Date().getMonth()

  const dateDifference = Math.abs(dateNow - dateStart)
  const monthDifference = Math.abs(monthNow - monthStart)

  let days = 0
  days = dateDifference + (monthDifference*30)

  let age = 0
  age = Math.floor((new Date() - new Date(birthDate).getTime()) / timeElapsed)

  return `currently ${age} year(s) old, ${days} day(s) until next birthday`
}

console.log(getAge('1999-06-14'),',,' );
console.log(getAge('1994-06-13'));
