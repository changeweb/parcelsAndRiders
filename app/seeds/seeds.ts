import mongoose from "../configs/mongoDb"
import Parcel, { IParcel } from "../models/parcel"
import { seedParcels } from "./parcel"

export const seedDb = async () => {
    type ParcelType = Omit<IParcel, "_id">
    const parcelsToSeed = seedParcels.map((parcel: Partial<ParcelType>) => {
        let parcelWithoutRider = {
            'weight': parcel.weight,
            'zone': parcel.zone,
            'amount': parcel.amount
        }
        let parcelWithRider: Partial<IParcel>
        
        if(parcel?.rider === undefined)
            parcelWithRider = {
                ...parcelWithoutRider
            }
        else {
            parcelWithRider = {
                ...parcelWithoutRider,
                'rider': parcel.rider
            }
        }
        
        return parcelWithRider
    })
    await Parcel.deleteMany({})
    await Parcel.insertMany(parcelsToSeed)
}

// seedDb().then(() => {
//     mongoose.connection.close()
// })