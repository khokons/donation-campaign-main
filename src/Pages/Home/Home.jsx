import { useLoaderData } from "react-router-dom";
import Cards from "../../componentes/Cards/Cards";
import Banner from "../../componentes/Header/Banner/Banner";


const Home = () => {

    const cards = useLoaderData();
    

    return (
        <div>
           <Banner></Banner>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;