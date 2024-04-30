import {  useTypewriter, Cursor, Typewriter  } from 'react-simple-typewriter'
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  // const {text} = useTypewriter({
  //   words: ,
  //   loop: {},
  // });
 
  
  return (
    <div>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }} className='text-3xl'>
      Meet Our Esteemed Reviewers-Voices That Illuminate Excellence:{' '}
        <span style={{ color: '#caabab', fontWeight: 'bold' }}>
          <Typewriter
            words={['John Paul' , 'Billy Joe', 'Tommy James', 'Jimmy Carter']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    <div className="my-7 rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        pauseOnHover = 'true'  
        />
    </div>
</div>
  );
}

const testimonials = [
  {
    image:"https://i.ibb.co/VQjQTfp/photo-1503443207922-dff7d543fd0e-q-80-w-1527-auto-format-fit-crop-ixlib-rb-4-0.jpg",
    name: "John Paul",
    title: "What a delightful discovery! This website celebrates the beauty of natural materials through exquisite wooden and jute art and craft. The dedication to quality is evident in every product, from the intricate wood carvings to the intricately woven jute designs. I appreciate the range of prices, making it accessible to both seasoned collectors and those just starting their art collection journey. Overall, a fantastic destination for anyone seeking authentic, handcrafted pieces with character and charm",
  },
  {
    image: "https://i.ibb.co/hMDf3MX/photo-1599847022902-f64cc1ae97fd-q-80-w-1528-auto-format-fit-crop-ixlib-rb-4-0.png",
    name: "Jimmy Carter",
    title: "This website is a treasure trove for art enthusiasts and nature lovers alike! The attention to detail in each wooden and jute art piece is remarkable. Whether you are looking for a statement piece for your living room or a thoughtful gift for a loved one, you will find something truly special here. The photography beautifully captures the essence of each item, making the online shopping experience delightful and inspiring.",
  },
  {
    image: "https://i.ibb.co/NrdtnSr/photo-1593757147298-e064ed1419e5-q-80-w-1587-auto-format-fit-crop-ixlib-rb-4-0.jpg",
    name: "Tommy James",
    title: "As someone passionate about sustainable living and eco-friendly products, I was thrilled to stumble upon this website. The commitment to using wooden and jute materials in the art and craft pieces is commendable. Each item tells a story of craftsmanship and dedication to preserving our environment. The website layout is user-friendly, making it easy to browse through the stunning collection of handcrafted treasures",
  },
  {
    image:"https://i.ibb.co/pxtpNVq/photo-1598106755735-3ebfced1d38b-q-80-w-1587-auto-format-fit-crop-ixlib-rb-4-0.jpg",
    name: "Billy Joe",
    title: "Absolutely love the unique craftsmanship showcased on this website! The blend of wooden and jute materials in the art and craft pieces creates a rustic yet elegant vibe. The variety of items available is impressive, catering to different tastes and preferences. A must-visit for anyone looking to add a touch of natural beauty to their home decor",
  }
];
