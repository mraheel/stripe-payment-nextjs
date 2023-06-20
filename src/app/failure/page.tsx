import { Button } from "@/components/ui/button"
import { AiOutlineArrowLeft } from 'react-icons/ai'

const StripeFailure = () => {
  return (
    <div className='py-10 flex flex-col gap-8 items-center justify-center h-screen'>
      <p className="text-red-500">Payment has been declined</p> 
      <Button variant={"link"}><AiOutlineArrowLeft className="mr-1" /> Go Back To Home</Button>
    </div>
  )
}
export default StripeFailure
