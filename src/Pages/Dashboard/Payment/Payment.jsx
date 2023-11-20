import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('');

const Payment = () => {
    return (
        <div>
           <SectionTitle subHeading="Payment" heading="---Make me Rich---"></SectionTitle> 

           <div>
            <Elements stripe={stripePromise}>
            
            </Elements>
           </div>
        </div>
    );
};

export default Payment;