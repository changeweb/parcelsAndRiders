import { Request, Response } from "express"
import { responseBuilder } from '../helpers'
import { getAllRidersAlongWithTotalCollectedAmount, getParcelsByUnassignedRider, getReadyRidersForParcelLimit } from "../services/rider"

export const getParcelsWithoutRider = async (req: Request, res: Response) => {
    try {
        const count = await getParcelsByUnassignedRider()
        responseBuilder({count}, res)
    } catch (error) {
        console.error(error)
        responseBuilder({ message: "Error counting parcels without rider property" }, res, 500)
    }
}

export const getReadyRiders = async (req: Request, res: Response) => {
    try {
        const readyRiders = await getReadyRidersForParcelLimit()

        responseBuilder({readyRiders}, res)
    } catch (error) {
        console.error(error)
        responseBuilder({ message: "Error getting ready riders" }, res, 500)
    }
}

export const getRidersAlongWithTotalCollectedAmount = async (req: Request, res: Response) => {
    try {
        const riders = await getAllRidersAlongWithTotalCollectedAmount()
        responseBuilder({riders}, res)
    } catch (error) {
        console.error(error)
        responseBuilder({ message: "Error getting riders along with total collected amount" }, res, 500)
    }
}