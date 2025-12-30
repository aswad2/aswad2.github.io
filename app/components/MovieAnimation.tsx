"use client";

import Lottie from "lottie-react";
import movieAnimation from "../../public/animations/movie.json";

export default function MovieAnimation() {
  return (
    <div style={{ width: 280, height: 280 }}>
      <Lottie animationData={movieAnimation} loop={true} />
    </div>
  );
}

