import useGenres from "../hooks/useGenres";
import { Image, HStack, Text, ListItem, List } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack justifyContent="space-between">
              <Text fontSize="lg">{genre.name}</Text>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
