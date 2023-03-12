const express = require('express')
const app = express()
const { SERVER_PORT } = process.env
const API_PREFIX = '/api/v1'

const routers = require('./app/routers/APIV1')

app.use(API_PREFIX, routers)

app.listen(SERVER_PORT, () => {
    console.log(`Example app listening on port ${SERVER_PORT}`)
})