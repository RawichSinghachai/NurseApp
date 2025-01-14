import { Schema, model, models } from "mongoose";

const BabySchema = new Schema(
  {
    babyName: { type: String },
    babyAge: { type: Number },
    babyGender: { type: String},
    babyBirthday: { type: String },
    height: { type: [Number]},
    weight: { type: [Number] },
    checkDate: { type: [Date],},
    parent: [{ type: Schema.Types.ObjectId, ref: "Parent" }],
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Baby = models.Baby || model("Baby", BabySchema);
export default Baby;
