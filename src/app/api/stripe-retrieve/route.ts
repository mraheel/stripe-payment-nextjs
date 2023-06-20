import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export async function GET(request: NextRequest) {
    const url = request.nextUrl;
    const session_id =  url.searchParams.get('session_id')
  try {
    if (url.searchParams.has('session_id')) {
      const session = await stripe.checkout.sessions.retrieve(`${session_id}`);
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "Missing required parameter" });
    }
  } catch (err: any) {
    return NextResponse.json(err.message);
  }
}