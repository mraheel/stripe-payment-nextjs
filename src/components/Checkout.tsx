'use client';
import getStripePromise from "@/lib/stripe";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react"
import { useState } from "react";

const products = [
    {
      product: 1,
      name: "Stripe Product",
      price: 400,
      quantity: 3,
    },
    {
      product: 2,
      name: "Stripe Product2",
      price: 40,
      quantity: 2,
    },
    {
      product: 3,
      name: "Stripe Product23",
      price: 4000,
      quantity: 1,
    },
  ];
const StripeCheckoutButton = () => {


    const [loading, setLoading] = useState(false);
    const handleStripeCheckout = async () =>{
      setLoading(true)
        const stripe = await getStripePromise();
        const response = await fetch("/api/stripe-session/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify(products),
        });

        const data = await response.json();
        if (data.session) {
        
            stripe?.redirectToCheckout({ sessionId: data.session.id });
        }
    }
    return (
      <>


      {
        loading && (
          <Button className="w-36"  disabled>
            <Loader2 className="animate-spin" />Please wait
          </Button>
        )
      }
        
      {
        !loading && (
          <Button className="w-36 tracking-widest  px-4 py-2" onClick={()=> handleStripeCheckout() }>
            Checkout
          </Button>
        )
      }
        
      </>
    )
}
export default StripeCheckoutButton