import StripeCheckoutButton from "@/components/Checkout";

const Home:React.FC<{
  searchParams:any
}> =  async ({ searchParams }) => {

  const res = searchParams.canceled? 'Payment decline': null
  return (
    <div className='py-10 flex flex-col gap-8 items-center justify-center h-screen'>
      <h3 className='text-xl tracking-widest'>Stripe Demo</h3>
      <StripeCheckoutButton />
      <p className="text-red-500">{ res }</p> 
    </div>
  )
}
export default Home
