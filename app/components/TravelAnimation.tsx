"use client";

import Lottie from "lottie-react";
import travelAnimation from "../../public/animations/travel.json";

export default function TravelAnimation() {
  return (
    <div style={{ width: 600, height: 600 }}>
      <Lottie animationData={travelAnimation} loop={true} />
    </div>
  );
}

