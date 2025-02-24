import React from "react";

const BallAnimation = ({
  x,
  y,
  w,
  h,
  blur,
}: {
  x: string;
  y: string;
  w: string;
  h: string;
  blur: string;
}) => {
  return (
    <div
      className={`absolute     opacity-20 ${blur}   rounded-full bg-gradient-to-r from-primary to-transparent ${x} ${y} ${w} ${h} -z-10 `}
    />
  );
};

export default BallAnimation;
