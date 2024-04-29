import ArtnCraftCategory from "../Art and Craft Categories/ArtnCraftCategory";
import Form from "../extra two route/Form";
import Testimonial from "../extra two route/Testimonial";
import Banner from "./Banner";
import CraftIteams from "./CraftIteams";



const Home = () => {
    return (
        <div className="min-h-screen">
           <Banner></Banner>
           
           <CraftIteams></CraftIteams>
           <ArtnCraftCategory></ArtnCraftCategory>
           <Testimonial></Testimonial>
           <Form></Form>

        </div>
    );
};

export default Home;