import { Circle } from "lucide-react";
const CircleIcon = ({
  y,
  x,
  color,
}: {
  y: string;
  x: string;
  color: string;
}) => {
  return (
    <Circle
      className={`absolute size-10  flex ${color} ${y} ${x} -z-10  opacity-85 rotate-6`}
    />
  );
};

export default CircleIcon;
