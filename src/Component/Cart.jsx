import React from 'react'
import './Cart.css'

const Cart = ({ output }) => {

    if (!output) {
        return <div className='error'>
            <h1>result not found</h1>
        </div>
    }

    return (
        <div className="cartDiv">

            {output.map((ele) => {
                return <div className='moviCard'>

                    <div className="moviName">
                        <h1>{ele.Title}</h1>
                    </div>

                    <div className="imageDiv">
                        <img src={ele.Poster} alt="" />
                    </div>

                    <div className='year'>
                        <p>({ele.Year})</p>
                    </div>

                </div>
            })}
        </div>
    )
}

export default Cart;