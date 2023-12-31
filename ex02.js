const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const knex = require('knex')
const app = express()
const multer = require('multer')

const db = knex({
    client: 'mysql',
    connection: {
        host: process.env.MYSQL_HOST || '127.0.0.1',
        port: process.env.MYSQL_PORT || 3306,
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '123456',
        database: process.env.MYSQL_DB || 'iot-66',
        supportBigNumber: true,
        timezone: '+7:00',
        dateStrings: true,
        charset: 'utf8mb4_unicode_ci',
    },
})

app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send({ ok: 1 })
})
app.get('/lists', async (req, res) => {
    console.log('lists')
    let row = await db('users_advisor')
    // .where("major_id", 98)
    res.send({
        datas: row,
        status: 1,
    })
})
app.listen(7001, () => {
    console.log('ready:candle:7001')
})