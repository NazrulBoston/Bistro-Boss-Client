import TitleSection from "../../../components/TitleSaction/TitleSection";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);

const Payments = () => {
    return (
        <div>
            <TitleSection heading="Payment" subHeading="Please pay to eat" />
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payments;
