import React from 'react'
import '../styles/Home.css'
import Product from './Product'

const Home = () => {
    return (
      <div className="home">
        <img
          className="home_img"
          src="https://i.postimg.cc/MTYT7S6J/banner1.jpg"
          alt="banner"
        />
        {/* Product section */}
        <div className="home_row">
          <Product 
            id="123"
            title="Think and Grow Rich : Napolean Hill"
            price={200}
            rating={4}
            image="https://i.postimg.cc/gcTmLD80/book22.jpg"
          />
          <Product
            id="124"
            title="Google Home : A Smart voice assistant from Google"
            price={9999}
            rating={5}
            image="https://i.postimg.cc/fbWY2GRZ/googlehome.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="125"
            title="Wooden table : Adjustable Wood Portable Laptop Table  (Finish Color - Brown)"
            price={900}
            rating={4}
            image="https://i.postimg.cc/rp2PDFjj/woodtable.jpg"
          />
          <Product
            id="123422"
            title="HP Multimedia Slim Wireless Keyboard & Mouse Combo Wireless Laptop Keyboard  (Black)"
            price={1899}
            rating={4}
            image="https://i.ibb.co/5rpq23V/keyboard.jpg"
          />
          <Product
            id="1233213"
            title="Regular men Slim fit Blue jeans: Flat ₹30 discount on first prepaid transaction"
            price={1249}
            rating={3}
            image="https://i.postimg.cc/HnBhRZ0s/jeans.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="123213"
            title="Samsung 32 inch Curved HD LED Backlit Monitor (32 inch Smart Curved TV + Monitor)"
            price={200}
            rating={4}
            image="https://images.samsung.com/is/image/samsung/sg-curved-c49j89-lc49j890dkexxs-lperspectiveblack-101633098?$PD_GALLERY_L_JPG$"
          />
        </div>

        <div className="home_row">
          <Product
            id="123243"
            title="Google Pixel 4A (5G enable Phone from Google)"
            price={49999}
            rating={4}
            image="https://images.news18.com/ibnlive/uploads/2020/08/1596514584_google-pixel-4a.png"
          />
          <Product
            id="124423"
            title="Apple Watch Series 3 (Standalone smart watch with built-in cellular means)"
            price={20000}
            rating={4}
            image="https://i.postimg.cc/wv5Gp8dv/apple.jpg"
          />
        </div>
      </div>
    );
}
// https://images.news18.com/ibnlive/uploads/2020/08/1596514584_google-pixel-4a.png

export default Home
