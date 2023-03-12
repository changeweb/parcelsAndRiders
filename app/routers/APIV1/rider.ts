import express from 'express'
import { getParcelsWithoutRider, getReadyRiders, getRidersAlongWithTotalCollectedAmount } from '../../controllers/riderController'
const router = express.Router()

router.get('/parcels/without-rider', getParcelsWithoutRider)
router.get('/ready-riders', getReadyRiders)
router.get('/total-collected-amount', getRidersAlongWithTotalCollectedAmount)

export default router