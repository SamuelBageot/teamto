import { FC } from "react";
import { CircularProgress, Grid, Card } from "@chakra-ui/react";
import { Character } from "../../redux/characters/types";
import CharacterCard from "./Character";

export type CharactersTemplateProps = {
  isLoading: Boolean;
  characters: Character[];
};

const Characters: FC<CharactersTemplateProps> = ({ isLoading, characters }) => {
  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
        templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}
        gap={{ sm: 5, lg: 10 }}
    >
      {characters?.map((character) => (
        <CharacterCard key={character.uid} { ...character } />
      ))}
    </Grid>
  );
};

export default Characters;
