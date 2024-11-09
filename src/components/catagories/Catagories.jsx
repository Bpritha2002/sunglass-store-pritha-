import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const { categoryName } = useParams();
  const [visibleCount, setVisibleCount] = useState(6);

  const categoriesContent = {
    men: {
      title: 'Men\'s Sunglasses',
      description: 'Explore the latest trends in men\'s sunglasses, offering both style and protection.',
      items: [
        { src: require('../../utils/m13.jpg'), title: 'Wayfarer Way', description: 'Latest Collection', price: '₹2,500' },
        { src: require('../../utils/m2.jpg'), title: 'Jorge', description: 'Latest Collection', price: '₹3,000' },
        { src: require('../../utils/m3.jpg'), title: 'Justin', description: 'Latest Collection', price: '₹2,800' },
        { src: require('../../utils/m4.jpg'), title: 'Baloroma', description: 'Latest Collection', price: '₹5,300' },
        { src: require('../../utils/m5.jpg'), title: 'Aviator Chromance', description: 'Latest Collection', price: '1,400' },
        { src: require('../../utils/m14.jpg'), title: 'Round Metal', description: 'Latest Collection', price: '₹1,200' },
        { src: require('../../utils/m7.jpg'), title: 'Evolution', description: 'Latest Collection', price: '₹5,100' },
        { src: require('../../utils/m8.jpg'), title: 'Aviator Titanium', description: 'Latest Collection', price: '₹4,000' },
        { src: require('../../utils/m15.jpg'), title: 'Hawkeye', description: 'Latest Collection', price: '₹2,500' },
        { src: require('../../utils/m10.jpg'), title: 'FD5675Y', description: 'Latest Collection', price: '2,300' },
        { src: require('../../utils/m11.jpg'), title: 'Elliot', description: 'Latest Collection', price: '₹3,200' },
        { src: require('../../utils/m12.jpg'), title: 'RD142x Chromance', description: 'Latest Collection', price: '₹2,800' },
      ]
    },
    women: {
      title: 'Women\'s Sunglasses',
      description: 'Discover stylish sunglasses for women, combining elegance with UV protection.',
      items: [
        { src: require('../../utils/wom1.jpg'), title: 'ANH', description: 'Latest Collection', price: '₹3,200' },
        { src: require('../../utils/wom2.jpg'), title: 'Yevi', description: 'Latest Collection', price: '₹2,700' },
        { src: require('../../utils/wom3.jpg'), title: 'Xime', description: 'Latest Collection', price: '₹3,000' },
        { src: require('../../utils/wom4.jpg'), title: 'Emy', description: 'Latest Collection', price: '₹2,500' },
        { src: require('../../utils/wom5.jpg'), title: 'Teru', description: 'Latest Collection', price: '₹2,800' },
        { src: require('../../utils/wom67.jpg'), title: 'Zena', description: 'Latest Collection', price: '₹3,100' },
        { src: require('../../utils/wom68.jpg'), title: 'Kat', description: 'Latest Collection', price: '₹3,500' },
        { src: require('../../utils/wom69.jpg'), title: 'Jorge', description: 'Latest Collection', price: '₹2,900' },
        { src: require('../../utils/wom70.jpg'), title: 'Izaz', description: 'Latest Collection', price: '₹2,100' },
        { src: require('../../utils/wom71.jpg'), title: 'Wayfarer Way', description: 'Latest Collection', price: '₹4,500' },
        { src: require('../../utils/wom11.jpg'), title: 'Kiliane', description: 'Latest Collection', price: '₹1,100' },
        { src: require('../../utils/wom12.jpg'), title: 'Bain Bridge-8', description: 'Latest Collection', price: '₹5,200' },
      ]
    },
    Kids: {
      title: 'Kids\' Sunglasses',
      description: 'Find fun and protective sunglasses for kids, perfect for outdoor adventures.',
      items: [
        { src: require('../../utils/promo1.jpg'), title: 'Colorful Shades', description: 'Bright and colorful shades for kids', price: '₹1,000' },
        { src: require('../../utils/promo2.jpg'), title: 'Fun Frames', description: 'Fun and playful frames', price: '₹1,200' },
        { src: require('../../utils/promo3.jpg'), title: 'Adventure Glasses', description: 'Ideal for outdoor adventures', price: '₹1,300' },
        { src: require('../../utils/store.jpg'), title: 'Store Collection', description: 'Exclusive store collection', price: '₹1,400' },
        { src: require('../../utils/style.jpg'), title: 'Stylish Designs', description: 'Stylish designs for kids', price: '₹1,500' },
        { src: require('../../utils/shirt.jpg'), title: 'T-shirt Print', description: 'T-shirt print sunglasses', price: '₹1,600' },
        { src: require('../../utils/sweater.jpg'), title: 'Sweater Look', description: 'Sweater look sunglasses', price: '₹1,700' }
      ]
    },
    default: {
      title: 'Kids\' Sunglasses',
      description: 'Find fun and protective sunglasses for kids, perfect for outdoor adventures.',
      items: [{ src: require('../../utils/kidsun1.jpg'), title: 'Izzy', description: 'Latest Collection', price: '₹2,200' },
        { src: require('../../utils/kidsun2.jpg'), title: 'Junior Jack', description: 'Latest Collection', price: '₹1,200' },
        { src: require('../../utils/kidsun9.jpg'), title: 'Miss Burbank', description: 'Latest Collection', price: '₹1,300' },
        { src: require('../../utils/kidsun4.jpg'), title: 'Junior Aviator', description: 'Latest Collection', price: '₹1,400' },
        { src: require('../../utils/kidsun5.jpg'), title: 'Wayfarer Way', description: 'Latest Collection', price: '₹1,600' },
        { src: require('../../utils/kidsun6.jpg'), title: 'Junior Round', description: 'Latest Collection', price: '₹1,700' },
        { src: require('../../utils/kidsun7.jpg'), title: 'Burbank Jr', description: 'Latest Collection', price: '₹1,900' },
        { src: require('../../utils/kidsun8.jpg'), title: 'RJ9083E', description: 'Latest Collection', price: '₹1,100' },
        { src: require('../../utils/kidsun91.jpg'), title: 'RJ6784R', description: 'Latest Collection', price: '₹2,400' },
        { src: require('../../utils/kidsun10.jpg'), title: 'Leonard Kids', description: 'Latest Collection', price: '₹2,800' },
        { src: require('../../utils/kidsun11.jpg'), title: 'ORJ678V', description: 'Latest Collection', price: '₹3,500' },
        { src: require('../../utils/kidsun12.jpg'), title: 'Junior Justin', description: 'Latest Collection', price: '₹2,900' },
      ]
    }
  };

  const category = categoriesContent[categoryName] || categoriesContent.default;

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
    return Math.ceil(visibleCount / 6);
  };

  // const getBatchNumber = () => {
  //   return Math.ceil(visibleCount / 6);
  // };

  return (
    <div className="category-container">
      <h1>{category.title}</h1>
      <p>{category.description}</p>
      <div className="category-cards">
        {category.items.slice(0, visibleCount).map((item, index) => (
          <div key={index} className="category-card">
            <img src={item.src} alt={item.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-description">{item.description}</p>
              <p className="card-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < category.items.length && (
        <button onClick={handleShowMore} className="show-more-button">
          Show More
        </button>
      )}
    </div>
  );
};

export default Categories;