import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import { useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [error, setError] = useState('');
    const [ clientSecret, setClientSecret] = useState('');
    const [transactionId, setTranssactionId] = useState('');
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const totalPrice = cart.reduce( (total, item) => total + item.price, 0)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res => {
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret);
        })
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement)

        if(card === null) {
            return;
        }

        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('payment err', error)
            setError(error.message)
        }
        else{
            console.log('payment method', paymentMethod)
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('confirm error', confirmError)
        }
        else{
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id);
                setTranssactionId(paymentIntent.id);
            }
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-accent mt-7 text-white' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
                <p className='text-error'>{error}</p>
                {
                    transactionId && <p className='text-green-500 font-bold'> Your transaction id : {transactionId}</p>
                }
        </form>
    );
};

export default CheckoutForm;