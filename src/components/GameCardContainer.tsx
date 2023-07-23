import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface CardProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: CardProps) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
