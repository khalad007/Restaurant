import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    return (
        <div>
           <SectionTitle subHeading="Payment" heading="---Make me Rich---"></SectionTitle> 

           <div>
            <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
            </Elements>
           </div>
        </div>
    );
};

export default Payment;