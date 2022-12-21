// See https://github.com/typicode/json-server#module
const cors = require('cors');
const jsonServer = require('json-server')
const server = jsonServer.create()
const auth = require("json-server-auth");
const db = require("./db.json");
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
server.use(cors())
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://apply-for-final.onrender.com')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})
server.use(middlewares)
server.db = router.db;
server.use(auth);
server.use(router)
server.listen("https://apply-for-final.onrender.com", () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
