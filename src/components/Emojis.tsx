import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "20px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "15px" },
    5: { src: bullsEye, alt: "exceptiona", boxSize: "15px" },
  };

  return <Image {...emojiMap[rating]} marginTop={5}/>;
};

export default Emoji;
