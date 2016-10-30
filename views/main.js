module.exports = `
  <h1>Hi Piwakawaka! I made you an API.</h1>
  <a href='/robots'>click here to check out the client facing app</a>
  <br><br>

  <h3>Or check out the API! You can see all the robots at /api/robots, or get their JSON individually at /robots/:id</h3>
  <br>

  <h3>You can also add a new robot to the database using this form! It makes a POST request to /api/robots</h3>
  <form action="/api/robots" method="post">
      name: <input type="text" name="name"><br>
      <input type="submit" value="add robot">
  </form>
`
