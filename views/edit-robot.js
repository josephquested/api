module.exports = function (robot) {
  return `
    <h1>${robot.name}</h1>
    <br>
    <form action="/robots/${robot.id}" method="post">
        name: <input type="text" value="${robot.name}" name="name"><br>
        <input type="submit" value="rename robot">
    </form>
    <a href='/robots'>return to robots</a>
  `
}
