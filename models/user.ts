import mongoose, { Schema } from "mongoose"

export type UserRole = "admin" | "user"

export type UserDoc = {
  username: string
  passwordHash: string
  passwordSalt: string
  role: UserRole
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<UserDoc>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 64,
    },
    passwordHash: { type: String, required: true },
    passwordSalt: { type: String, required: true },
    role: { type: String, required: true, default: "admin" },
  },
  { timestamps: true }
)

const User = mongoose.models.User || mongoose.model<UserDoc>("User", UserSchema)
export default User

