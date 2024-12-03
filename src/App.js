import React from "react";
import ProductCard from "./files/js/Profilecard";
import './files/styles/Card.css'

function App() 
{
  return (
    <div>
      <h1>Product Cards</h1>
      <ProductCard
      title="Water Bottle"
      description="Reusable, BPA-free water bottle for everyday use"
      price={2000}
      imageUrl="https://cdn-hallh.nitrocdn.com/SAfCWcaKwKxWFpBYamCDCMxSsjTmthln/assets/images/optimized/rev-9f40af5/nashonuma.com/wp-content/uploads/2021/11/eco-friendly-bamboo-bottle-500x500-2.webp"/>
      <ProductCard
      title="Noise-Cancelling Earbuds"
      description="Compact earbuds with superior sound quality"
      price={4000}
      imageUrl="https://saamaan.pk/cdn/shop/files/BEMEBudsPro2Ultimate1.jpg?v=1725787395&width=600"/>
      <ProductCard
      title="Fitness Tracker watch"
      description="Track your steps, calories, and sleep patterns"
      price={7000}
      imageUrl="https://saamaan.pk/cdn/shop/products/MibroT1Smartwatch.jpg?v=1666623344&width=500"/>
      <ProductCard
      title="Portable Speaker"
      description="Wireless Bluetooth speaker with excellent sound"
      price={9000}
      imageUrl="https://saamaan.pk/cdn/shop/files/Beme_Explorer_Speaker-removebg-preview.png?v=1694088786&width=500"/>
    </div> );
}

export default App;
