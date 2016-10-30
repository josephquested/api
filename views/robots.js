module.exports = function (data) {
  var html = `<a href='/'><h1>return home</h1><a/><br>`

  data.forEach((item) => {
    html += `<h2>Name: ${item.name}</h2><h3>ID: ${item.id}</h3><a href='/robots/${item.id}'>view robo profile</a><br><br>`
  })

  return html
}
