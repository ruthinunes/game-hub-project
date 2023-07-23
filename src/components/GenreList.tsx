import useGenres, { Genre } from "../hooks/useGenres";
import {
  Image,
  HStack,
  ListItem,
  List,
  Button,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface selectGenreProps {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: selectGenreProps) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
