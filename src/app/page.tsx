"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/product";
import { useEffect } from "react";
import Productt from "./components/Productt";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Product />
      <Productt />
      <Footer />
    </div>
  );
}
