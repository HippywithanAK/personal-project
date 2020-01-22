const sever = require('./server')
const port = process.env.PORT || 3000

sever.listen(port, () => {
  console.log('listening on port', port)
})