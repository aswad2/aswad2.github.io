"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";

const navItems = [
  { href: "/", emoji: "🏠", label: "home" },
  { href: "/hobbies", emoji: "🎯", label: "hobbies" },
];

const greeceImages = [
  { src: "/images/travel_greece/plaka.jpeg", alt: "plaka" },
  { src: "/images/travel_greece/acropolis.jpeg", alt: "acropolis" },
  { src: "/images/travel_greece/meteora.jpeg", alt: "meteora" },
  { src: "/images/travel_greece/santorini.jpeg", alt: "santorini" },
  { src: "/images/travel_greece/threedome.jpeg", alt: "blue domes" },
];

function Carousel({ images }: { images: { src: string; alt: string }[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
      <div className="carousel-nav">
        <button className="carousel-button prev" onClick={prevSlide}>
          ←
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          →
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Travel() {
  return (
    <>
      <Navigation items={navItems} />

      <section className="hero">
        <header className="container">
          <h1 className="animate-in">travels</h1>
          <p className="tagline animate-in animate-in-delay-1">
            cool places i&apos;ve gotten to visit.
          </p>
        </header>
      </section>

      <main className="travel-container">
        <section className="travel-section animate-in animate-in-delay-2">
          <h2>🇬🇷 greece</h2>
          <div className="travel-content">
            <div className="travel-image">
              <Carousel images={greeceImages} />
            </div>
            <div className="travel-text">
              <p className="travel-date">summer 2024</p>
              <p className="travel-description">
                spent a little over a week traveling around greece with my
                family. so many cool historical sites and beautiful scenes!
              </p>
              <div className="travel-highlights">
                <h3>highlights</h3>
                <ul>
                  <li>athens</li>
                  <li>meteora</li>
                  <li>santorini</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

