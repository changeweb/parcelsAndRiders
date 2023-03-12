import express  from 'express'
import rider  from './rider'

const router = express.Router()

router.use('/rider', rider)

module.exports = router