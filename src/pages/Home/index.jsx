import { Affix, Divider, FloatButton } from "antd";
import React from "react";

import Announcement from "../../components/Annoucement";
import ListCoupon from "../../components/Coupon/coupon-list";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/NavBar";
import PopularProduct from "../../components/Product/popularProduct";
import Slider from "../../components/Slider";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-green-200">
      <Affix>
        <Announcement />
        <Navbar />
      </Affix>
      <div className="">
        <Slider />
      </div>
      <Divider>
        <h1 className="text-6xl font-bold">PRODUCT</h1>
      </Divider>
      <div className="p-3">
        <PopularProduct />
      </div>
      <div className="p-3">
        <ListCoupon />
      </div>
      <div className="p-3">
        <Footer />
      </div>
      <FloatButton.BackTop />
      {/* <FlashScreen /> */}
    </div>
  );
};

export default Home;
