import { getParcels, getParcelsByUnassignedRiderFromDb } from "../repositories/rider"

export const getParcelsByUnassignedRider = async () => {
    return await getParcelsByUnassignedRiderFromDb()
}

export const getReadyRidersForParcelLimit = async () => {
    type Riders = Record<string, string[]>
    const riders = <Riders>{}
    const parcels = await getParcels()

    parcels.forEach((parcel) => {
        // If parcel is assigned to a rider
        if (parcel.rider && typeof parcel.rider === "string") {
            // If rider exists in riders object, add the parcel
            if (riders[parcel.rider]) {
                riders[parcel.rider].push(parcel._id?.toString() ?? "")
            }
            // If rider doesn't exist in riders object, create new rider with parcel
            else {
                riders[parcel.rider] = [parcel._id?.toString() ?? ""]
            }
        }
    })

    // Filtering riders who don't have more than 10 parcels
    const readyRiders = <Riders>{}
    Object.keys(riders).forEach((rider) => {
        if (riders[rider].length <= 10) {
            readyRiders[rider] = riders[rider]
        }
    })

    return readyRiders
}

export const getAllRidersAlongWithTotalCollectedAmount = async () => {
    const parcels = await getParcels()
        type Riders = Record<string, { parcels: string[], totalAmount: number }>

        const riders: Riders = {}

        parcels.forEach((parcel) => {
            // If parcel is assigned to a rider
            if (parcel.rider && typeof parcel.rider === "string") {
                // If rider exists in riders object, add the parcel and update total amount
                if (riders[parcel.rider]) {
                    riders[parcel.rider].parcels.push(parcel._id?.toString() ?? "")
                    riders[parcel.rider].totalAmount += parcel.amount
                }
                // If rider doesn't exist in riders object, create new rider with parcel and total amount
                else {
                    riders[parcel.rider] = { parcels: [parcel._id?.toString() ?? ""], totalAmount: parcel.amount }
                }
            }
        })
    return riders
}