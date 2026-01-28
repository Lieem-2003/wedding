import mongoose, { Schema, models } from 'mongoose'

const WishSchema = new Schema(
  {
    name: { type: String, required: true },
    relation: { type: String },
    message: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

const Wish = models.Wish || mongoose.model('Wish', WishSchema)
export default Wish
