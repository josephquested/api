module.exports = function (data) {
  var html = ``
  data.forEach((item) => {
    html += `<h2>Name: ${item.name}</h2><h3>ID: ${item.id}</h3><a href='/robots/${item.id}'>view robo profile</a><br><br>`
  })

  return html
}
