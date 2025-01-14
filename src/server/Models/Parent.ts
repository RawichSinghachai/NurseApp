import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    clerkId: { type: String, required: true },
    parentName: { type: String },
    phone: { type: String },
    relation: { type: String },
    image: { type: String },
    email: { type: String, required: true, unique: true },
    baby: [{ type: Schema.Types.ObjectId, ref: "Baby" }],
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Parent = models.Parent || model("Parent", UserSchema);
export default Parent;
