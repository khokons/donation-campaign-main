import { useEffect, useState } from "react";
import Donationpage from "../DonationPage/Donationpage";

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('favorites'));
        if (donationItems) {
            setDonations(donationItems);
        } else {
            setNotFound("No Data Found");
        }
    }, [])

    return (
        <div>
            {
                notFound ? (
                    <p className="flex justify-center items-center h-[300px] text-4xl text-black">{notFound}</p>
                ) : (
                    <div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {
                                isShow ? donations.map(cart => <Donationpage key={cart.id} cart={cart}></Donationpage>)
                                    : donations.slice(0, 4).map(cart => <Donationpage key={cart.id} cart={cart}></Donationpage>)
                            }
                        </div>

                        <div className="flex justify-center items-center mt-12">
                            {
                                donations.length >= 4 && !isShow && (
                                    <button onClick={() => setIsShow(true)} className="px-3 py-2 bg-[#009444] rounded-md text-white">
                                        See All
                                    </button>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Donation;
