module.exports = function (robot) {
  return `
    <h1>Name: ${robot.name}</h1>
    <h2>ID: ${robot.id}</h2>
    <br>
    <a href='/robots'>return to robots</a>
  `
}
