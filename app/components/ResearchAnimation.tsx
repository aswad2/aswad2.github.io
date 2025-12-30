"use client";

import Lottie from "lottie-react";
import brainAnimation from "../../public/animations/brain.json";

export default function ResearchAnimation() {
  return (
    <div style={{ width: 360, height: 360 }}>
      <Lottie animationData={brainAnimation} loop={true} />
    </div>
  );
}
