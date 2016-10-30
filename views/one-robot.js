module.exports = function (robot) {
  return `
    <h1>${robot.name}</h1>
    <h3>ID: ${robot.id}</h2>
    <a href='/robots/edit/${robot.id}'>edit robot</a>
    <br>
    <a href='/robots'>return to robots</a>
  `
}
