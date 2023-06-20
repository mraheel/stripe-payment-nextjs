import { Button } from "@/components/ui/button";
import { AiOutlineArrowLeft } from 'react-icons/ai'

const getSessionData = async (session_id:string) => {
    const response = await fetch(`${process.env.BASE_URL}/api/stripe-retrieve?session_id=${session_id}`);
    if(response.ok){
        return  response.json()
    }else{
        throw new Error('Unable to call retrieve api')
    }
}


const CheckoutSuccess:React.FC<{
    searchParams:any
}> =  async ({ searchParams }) => {

    const result = await getSessionData(searchParams.session_id);
   

    return (
        <div className='w-3/5 py-10 flex flex-col gap-4 h-screen justify-center items-center m-auto'>
            <h3 className='text-xl tracking-widest'>Payment Successfull</h3>
            <p className="text-left">Response:</p>
            {
               <pre className="w-full h-screen overflow-y-auto text-sm">{JSON.stringify(result, null, 2) }</pre>
            }  
            <Button variant={"link"}><AiOutlineArrowLeft className="mr-1" /> Go Back To Home</Button>
        </div>
    )
}

export default CheckoutSuccess