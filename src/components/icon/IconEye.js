/* eslint-disable no-unreachable */
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const IconEyeOpen = ({ onClick = () => {} }) => {
  return <AiOutlineEye onClick={onClick}></AiOutlineEye>;
};

const IconEyeClose = ({ onClick = () => {} }) => {
  return <AiOutlineEyeInvisible onClick={onClick}></AiOutlineEyeInvisible>;
};

export { IconEyeOpen, IconEyeClose };
