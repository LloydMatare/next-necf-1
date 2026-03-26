import mongoose, { Schema } from "mongoose";

const eventScheme = new Schema(
    {
        title: String,
        subtitle: String,
        description: String,
        image: String,
    },
    {
        timestamps: true
    }
)

const Event = mongoose.models.Event || mongoose.model("Event", eventScheme)

export default Event
