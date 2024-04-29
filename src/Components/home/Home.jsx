import Testimonial from "../extra two route/Testimonial";
import Banner from "./Banner";
import CraftIteams from "./CraftIteams";



const Home = () => {
    return (
        <div className="min-h-screen">
           <Banner></Banner>
           
           <CraftIteams></CraftIteams>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;