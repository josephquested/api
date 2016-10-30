module.exports = function (data) {
  var html = `
    <a href='/'><h1>return home</h1><a/>
    <h3>Try adding a new robot to the database using this form! It makes a POST request to /robots</h3>
    <form action="/robots" method="post">
      name: <input type="text" name="name"><br>
      <input type="submit" value="add robot">
    </form>
    <br><hr>
  `

  data.forEach((item) => {
    html += `
    <h2>Name: ${item.name}</h2>
    <h3>ID: ${item.id}</h3>
    <a href='/robots/${item.id}'>view robo profile</a>
    <hr><br>`
  })

  return html
}
