import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCart from "./DonationCart/DonationCart";


const Cart = () => {
    const [cart, setcart] = useState({});
    const {id} = useParams();
    const cards = useLoaderData();

    useEffect(() => {
        const findCart = cards?.find((cart) => cart.id===id);
        setcart(findCart)
    },[id, cards])
    
    console.log(cart)

    return (
        <div>
            <DonationCart cart={cart}></DonationCart>
  
        </div>
    );
};

export default Cart;