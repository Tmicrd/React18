import { useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggle = () => {
    setIsLiked(!isLiked);
    onClick();
  };

  return isLiked ? (
    <IoIosHeart color="red" size={20} onClick={toggle} />
  ) : (
    <IoIosHeartEmpty size={20} onClick={toggle} />
  );
};

export default Like;
