"use client";
import Image from "next/image";
import { useRive } from "@rive-app/react-canvas";

export default function Home() {
  const { RiveComponent, rive } = useRive({
    src: "/mixing_animations.riv",
    stateMachines: ["State Machine 1"],
    autoplay: true,
  });

  return (
    <div className="flex min-h-screen">
      <div className="w-[500px] h-[500px] m-auto">
        <RiveComponent />
      </div>
    </div>
  );
}
