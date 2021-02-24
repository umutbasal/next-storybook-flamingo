const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  const middleware = (function (req, res, next) {
    next()
  })

  const apiMiddleware = (function (req, res, next) {
    next()
  })

  server.get('/', middleware, (req, res) => {
    return app.render(req, res, '/index', req.params)
  })

  server.get('/404', middleware, (req, res) => {
    return app.render(req, res, '/404', req.params)
  })

  server.get('/_error', middleware, (req, res) => {
    return app.render(req, res, '/_error', req.params)
  })

  server.get('/api/hello', middleware, (req, res) => {
      return handle(req, res)
  })

  server.get('*', apiMiddleware, (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})