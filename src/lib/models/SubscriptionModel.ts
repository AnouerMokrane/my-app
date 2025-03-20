import mongoose from "mongoose";

export const SubscriptionSchema = new mongoose.Schema({
  email: { require: true, type: String },
});

export const Subscription =
  mongoose.models.Subscription ||
  mongoose.model("Subscription", SubscriptionSchema);
