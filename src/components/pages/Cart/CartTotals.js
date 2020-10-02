import React, {useRef, useState, useEffect}  from 'react'
import './CartTotals.css'


function CartTotals({value}){
    const {cartSubtotal, cartTax, cartTotal, clearCart, productName} = value;
    
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(false)
    

    let paypalRef = useRef();
    
    useEffect(()=> {
        window.paypal
        .Buttons({
            style: {

                height:  35,
              },
            createOrder: (data, actions) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units:[
                        {
                            description: 'test',
                            amount: {
                                currency_code: "USD",
                                value: `${cartTotal}`,
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions) =>{
                const order = await actions.order.capture();
                setPaidFor(true)
                console.log(order)
            },
            onError: (err) => {
                console.error(err)
            },
        }).render(paypalRef.current)
    },[])

    
    return(
       <>
        <div className='cartTotals-container'>
            {paidFor ? (
                <div>
                    <h1>Thank you for your purchase!</h1>
                </div>
            ): (
            <>
                <div className='clearCart-container'>
                        <button className='clear-cart' onClick={() => clearCart()}>Clear Cart</button>
                </div>
                <div className='subtotal-container'>
                    <h4>Subtotal: ${cartSubtotal}</h4>
                </div>
                <div className='tax-container'>
                    <h4>Tax: ${cartTax}</h4>
                </div>
                <div className='total-container'>
                    <h4>Total: ${cartTotal}</h4>
                </div>
                <div ref={paypalRef} />
            </>
            )}
            
        </div>
       </>
    )
} 

export default CartTotals