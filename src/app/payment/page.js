"use client"
// components/payment.js
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { baseUrl } from '../BaseUrl';

const MySwal = withReactContent(Swal);

function page() {
  const publishableKey =
    'pk_test_51MW0sqA2UHtqGNuRS86jXELMgiNsywnlNaLJ1isdCq7yXbfvWKL2FisKTYAVPmBS4XY9EO4m0JRGOIELoiVnDThN00cq9qWeCS';
  const [product, setProduct] = useState({
    name: 'Headphone',
    price: 5,
  });
  const priceForStripe = product.price * 100;

  const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 4000,
    });
    
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 4000,
    });
  };
  const billingDetails= async(token)=>{
    console.log("ksdgjfgsdhkf")
    const data = {
      cardNumber: token.card.last4,
      cardHolderName:token.card.name,
      country: token.card.country,
      zipCde: token.card.address_zip,
  };
let payload={billingDetails:data}
console.log("data--------", payload)
  const config = {
      headers: {
          "Content-Type": "application/json",
      },
  };
  let user = JSON.parse(localStorage.getItem('user'))
   console.log("userData", user._id)
    axios.put(`${baseUrl}/api/updateBillingDetails/${user._id}`, payload, config)
            .then((response) => {
                console.log("ser response", response.data);
                // const { email, _id } = response.data.newUser;
            })
            .catch((error) => {
                console.error(error.response.data.msg);
                toast.error(error.response.data.msg);
                setError(error.response.data.msg);
            })

  }
  const payNow = async token => {
    try {
      const billingName = token.card.name;
      const cardNumber = token.card.last4;
      const country = token.card.country;
      const zipCode = token.card.address_zip;

      // Log the billing information to the console
      console.log('Billing Name:', billingName);
      console.log('Card Number:', `**** **** **** ${cardNumber}`);
      console.log('Country:', country);
      console.log('Zip Code:', zipCode);
      const response = await axios({
        url: 'http://localhost:5001/api/payment',
        method: 'post',
        data: {
          amount: product.price * 100,
          token,
        },
      });
      // console.log("skfsdkfjh", response)
      if (response.status === 200) {

        handleSuccess();
      await  billingDetails(token)

      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>Complete React & Stripe payment integration</h2>
      <p>
        <span>Product: </span>
        {product.name}
      </p>
      <p>
        <span>Price: </span>${product.price}
      </p>
      <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        // shippingAddress
        amount={priceForStripe}
        description={`Your total is $${product.price}`}
        token={payNow}
      />
    </div>
  );
}

export default page;
