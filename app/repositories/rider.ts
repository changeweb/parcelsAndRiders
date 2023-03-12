import Parcel from "../models/parcel"

export const getParcelsByUnassignedRiderFromDb = async () => {
   return await Parcel.countDocuments({ rider: { $exists: false } })
}

export const getParcels = async () => {
    return await Parcel.find()
}