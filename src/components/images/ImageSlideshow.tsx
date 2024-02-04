'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/mf_burger.jpg';
import curryImg from '@/assets/mf_curry.jpg';
import omeletteImg from '@/assets/mf_omlette.jpg';
import fishNChipsImg from '@/assets/mf_and_chips.jpg';
import pizzaImg from '@/assets/mf_pizza.jpg';
import saladImg from '@/assets/mf_salad.jpg';
import steakImg from '@/assets/mf_steak.jpg';
import milkshakeImg from '@/assets/mf_milkshake.jpg';
import styles from './ImageSlideshow.module.css';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy Monkfish burger' },
  { image: curryImg, alt: 'A delicious, spicy Monkfish curry' },
  { image: omeletteImg, alt: 'A classic Monkfish omelette' },
  { image: fishNChipsImg, alt: 'Monkfish and chips' },
  { image: pizzaImg, alt: 'A delicious Monkfish pizza' },
  { image: steakImg, alt: 'A delicious Monkfish steak' },
  { image: milkshakeImg, alt: 'A delicious Monkfish flavoured Milkshake' },
  { image: saladImg, alt: 'A delicious Monkfish salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? styles.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
