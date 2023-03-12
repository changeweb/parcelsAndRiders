import { Document, Types, Model, Schema } from "mongoose"
import mongoose from "../configs/mongoDb"

export interface IParcel extends Document {
    _id?: Types.ObjectId
    weight: number
    zone: string
    amount: number
    [key: string]: any
  }

const parcelSchema: Schema = new mongoose.Schema({
    rider: {
        type: String,
    },
    weight: {
        type: Number,
    },
    zone: {
        type: String,
    },
    amount: {
        type: Number,
    },
})

const Parcel: Model<Partial<IParcel>> = mongoose.model<Partial<IParcel>>("Parcel", parcelSchema)

export default Parcel
