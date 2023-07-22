import { Badge } from "@chakra-ui/react";

interface ScoreProps {
  score: number;
}

const CriticScore = ({ score }: ScoreProps) => {
const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='10px'>{score}</Badge>;
};

export default CriticScore;