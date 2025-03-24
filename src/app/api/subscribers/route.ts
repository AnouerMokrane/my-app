import { connectDB } from "@/lib/dbConnect";
import { Subscription } from "@/lib/models/SubscriptionModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const subscriptions = await Subscription.find();
    return NextResponse.json(subscriptions);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch subscriptions" },
      { status: 500 }
    );
  }
}
