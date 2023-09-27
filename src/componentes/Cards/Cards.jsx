/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from "./card";
import card from "./card";

const Cards = ({cards}) => {
    console.log(cards)

    return (
        <div>
          
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {
                    cards?.map(card => <Card key={card.id} card={card} ></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;