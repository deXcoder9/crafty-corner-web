import { FaStar,FaRegStarHalfStroke  } from "react-icons/fa6";

const Testimonial = () => {
   
    
      return (
        <div className="mt-16">
            <h1 className="text-3xl underline mb-5">Testimonial</h1>
        <div className="carousel w-3/4 h-[400px] ">
  <div id="slide1" className="carousel-item relative w-full">
    {/* <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" /> */}
    <div className="flex flex-col justify-center items-center space-y-3 w-full">
       <img className="h-[200px] rounded-xl w-auto " src="https://i.ibb.co/VQjQTfp/photo-1503443207922-dff7d543fd0e-q-80-w-1527-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
       <p className="text-xl">John Paul</p>
       <p className="text-sm lg:w-[700px]">What a delightful discovery! This website celebrates the beauty of natural materials through exquisite wooden and jute art and craft. The dedication to quality is evident in every product, from the intricate wood carvings to the intricately woven jute designs. I appreciate the range of prices, making it accessible to both seasoned collectors and those just starting their art collection journey. Overall, a fantastic destination for anyone seeking authentic, handcrafted pieces with character and charm</p>
       <p className="flex"> <FaStar /><FaStar /><FaStar /><FaStar /> </p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a  className="flex flex-col justify-center items-center space-y-3 w-full"ef="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    {/* <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" /> */}
    <div className="flex flex-col justify-center items-center space-y-3 w-full">
        <img  className="h-[200px] rounded-xl w-auto" src="https://i.ibb.co/hMDf3MX/photo-1599847022902-f64cc1ae97fd-q-80-w-1528-auto-format-fit-crop-ixlib-rb-4-0.png" alt="" />
        <p className="text-xl">Name:Billy Joe</p>
        <p className="text-sm lg:w-[700px]">Absolutely love the unique craftsmanship showcased on this website! The blend of wooden and jute materials in the art and craft pieces creates a rustic yet elegant vibe. The variety of items available is impressive, catering to different tastes and preferences. A must-visit for anyone looking to add a touch of natural beauty to their home decor</p>
        <p className="flex"><FaStar /><FaStar /><FaStar /><FaStar /> <FaRegStarHalfStroke /></p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    {/* <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" /> */}
    <div className="flex flex-col justify-center items-center space-y-3 w-full">
        <img  className="h-[200px] rounded-xl w-auto" src="https://i.ibb.co/NrdtnSr/photo-1593757147298-e064ed1419e5-q-80-w-1587-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
        <p className="text-xl">Name: Tommy James</p>
        <p className="text-sm lg:w-[700px]">As someone passionate about sustainable living and eco-friendly products, I was thrilled to stumble upon this website. The commitment to using wooden and jute materials in the art and craft pieces is commendable. Each item tells a story of craftsmanship and dedication to preserving our environment. The website layout is user-friendly, making it easy to browse through the stunning collection of handcrafted treasures</p>
        <p className="flex"><FaStar  /><FaStar /><FaStar /><FaStar /></p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    {/* <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" /> */}
    <div className="flex flex-col justify-center items-center space-y-3 w-full">
        <img  className="h-[200px] rounded-xl w-auto" src="https://i.ibb.co/pxtpNVq/photo-1598106755735-3ebfced1d38b-q-80-w-1587-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
        <p className="text-xl">Name: Jimmy Carter</p>
        <p className="text-sm lg:w-[700px]">This website is a treasure trove for art enthusiasts and nature lovers alike! The attention to detail in each wooden and jute art piece is remarkable. Whether you are looking for a statement piece for your living room or a thoughtful gift for a loved one, you'll find something truly special here. The photography beautifully captures the essence of each item, making the online shopping experience delightful and inspiring.</p>
        <p className="flex"><FaStar /><FaStar /><FaStar /><FaStar />  <FaRegStarHalfStroke /> </p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>
      )
    }
;    

export default Testimonial;