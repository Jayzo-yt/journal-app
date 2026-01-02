"use client";
import Squares from "@/components/Squares";

export default function SquaresClient(props) {
  return (
    <div className="absolute inset-0 -z-10">
      <Squares {...props} className="w-full h-full" />
    </div>
  );
}
