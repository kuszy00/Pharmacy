import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch } from "../../app/store/ConfigureStore";
import { setBasket } from "../basket/BasketSlice";
import CheckoutPage from "./CheckoutPage";

const stripePromise = loadStripe("pk_test_51LBq5zLxeSvRPSIKdGblR8eu9jTByTg4HXCzGbGvdbHCc192Aw3P4RsQzTljJL0r2Tw2hVTg12mp2Yi6b4x9R5FH00YGNenGPE");

export default function CheckoutWrapper() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
         agent.Payments.createPaymentIntent()
             .then(basket => dispatch(setBasket(basket)))
             .catch(error => console.log(error))
             .finally(() => setLoading(false));
    }, [dispatch]);

    if (loading) return <LoadingComponent message='Loading...' />

    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage />
        </Elements>
    )
} 