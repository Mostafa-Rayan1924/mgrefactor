import { Square } from "lucide-react";

const SquareIcon = ({
  y,
  x,
  color,
}: {
  y: string;
  x: string;
  color: string;
}) => {
  return (
    <Square
      className={`size-10 absolute ${y} ${x} -z-20 ${color} opacity-85 rotate-6 `}
    />
  );
};

export default SquareIcon;
