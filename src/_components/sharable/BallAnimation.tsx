import React from "react";

const BallAnimation = ({
  x,
  y,
  w,
  h,
}: {
  x: string;
  y: string;
  w: string;
  h: string;
}) => {
  return (
    <div
      className={`absolute ${x} ${y} ${w} ${h}    opacity-20 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20  `}
    />
  );
};

export default BallAnimation;
