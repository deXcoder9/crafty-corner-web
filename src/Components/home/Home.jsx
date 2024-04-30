import { useEffect } from "react";
import ArtnCraftCategory from "../Art and Craft Categories/ArtnCraftCategory";
import Form from "../extra two route/Form";
import CraftIteams from "./CraftIteams";
import Banner from "./Banner";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCards";
// import NewCraftItems from "./NewCraftItems";
// import  InfiniteMovingCardsDemo  from "./InfiniteMovingCardsDemo";




const Home = () => {
    
    useEffect(() => {
        document.title = "Home"
    }, [])
    
    return (
        <div className="min-h-screen">
           <Banner></Banner>
           
           <CraftIteams></CraftIteams>
           {/* <NewCraftItems></NewCraftItems> */}
           <ArtnCraftCategory></ArtnCraftCategory>
           
           <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
           
           <Form></Form>
            {/* <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo> */}
            {/* <InfiniteMovingCards></InfiniteMovingCards> */}

        </div>
    );
};

export default Home;