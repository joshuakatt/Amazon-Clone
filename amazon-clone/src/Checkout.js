import React from 'react'
import "./Checkout.css";

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' 
            src = "https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
            alt="" 
            />

            <div> 
                <h2 className='checkout__title'>
                    Your Shopping Basket!
                </h2>
            </div>

        </div>

        <div className='checkout__right'>
            <h2>
                Subtotal here
            </h2>
        </div>

        
    </div>
  );
}

export default Checkout