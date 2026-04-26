import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Notif from "./components/Notif";
import ItemName from "./components/ItemName";
import MyCarousel from "./components/MyCarousel";
import BidSection from "./components/BidSection";
import Description from "./components/Description";
import UserBids from "./components/UserBids";
import About from "./components/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CardProvider from "./providers/CardProvider";


function App() {
  const homeRef = useRef(null);
  const bidRef = useRef(null);
  const aboutRef = useRef(null);
  const notifTimer = useRef(null);
  const [notifMessage, setNotifMessage] = useState("");
  const [notifVisible, setNotifVisible] = useState(false);

  const items = [
    {
      title: "Necklace Jewlery",
      description: "The custom made necklace, is a precious jewlery hand made from the best jewlery store in the [city name], made out of pure gold and precious amethyst.",
    },
    {
      title: "Diamond Ring",
      description: "This ring is a luxurious item made out of gold and a diamond, by the most known lapidaries and goldsmiths.",
    },
  ];
  const [itemIndex, setItemIndex] = useState(0);

  useEffect(() => {
    return () => clearTimeout(notifTimer.current);
  }, []);

  const showNotification = (message) => {
    clearTimeout(notifTimer.current);
    setNotifMessage(message);
    setNotifVisible(true);
    notifTimer.current = setTimeout(() => setNotifVisible(false), 2000);
  };

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
 return (
  <CardProvider>
    <div className="flex flex-col m-0 p-0">
    <Nav scrollTo={scrollTo} homeRef={homeRef} bidRef={bidRef} aboutRef={aboutRef} />
    <Notif message={notifMessage} visible={notifVisible} />
    <div ref={homeRef}><ItemName title={items[itemIndex].title} /></div>

    <div className="layout">

      <div className="bidsectionstyle gap-8">
        <div className="carousel-wrapper">
          <MyCarousel />
        </div>
        <div className="right-col" ref={bidRef}>
          <BidSection
            showNotification={showNotification}
            advanceItem={() => setItemIndex((prev) => (prev + 1) % items.length)}
          />
          <Description className="desc" itemDescription={items[itemIndex].description} />
        </div>
      </div>

      <div className="userbids-wrapper">
        <UserBids />
      </div>

      <div ref={aboutRef} className="about-wrapper">
        <About />
      </div>

      <div className="footer-wrapper">
        <Footer />
      </div>
        <ScrollToTop />
    </div>
    </div>
  </CardProvider>
);

}

export default App;