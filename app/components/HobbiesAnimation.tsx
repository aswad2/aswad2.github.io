"use client";

import Lottie from "lottie-react";
import tennisAnimation from "../../public/animations/tennis.json";

export default function HobbiesAnimation() {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={tennisAnimation} loop={true} />
    </div>
  );
}

