module.exports = function (robot) {
  return `
    <h1>${robot.name}</h1><hr>
    <h3>ID: ${robot.id}</h2>

    <form action="/robots/edit/${robot.id}" method="get">
      <input type="submit" value="edit robot">
    </form>

    <form action="/robots/delete/${robot.id}" method="post">
      <input type="submit" value="delete robot">
    </form>
    <hr>

    <a href='/robots'>return to robots</a>
  `
}
