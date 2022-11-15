import { ChangeEventHandler, FC } from "react";
import { CircularProgress, Grid, Box, Input } from "@chakra-ui/react";
import { Character } from "../../redux/characters/types";
import CharacterCard from "./Character";

export type CharactersTemplateProps = {
  isLoading: Boolean;
  characters: Character[];
  search: string;
  handleSetSearch: ChangeEventHandler<HTMLInputElement>;
};

const Characters: FC<CharactersTemplateProps> = ({ isLoading, characters, search, handleSetSearch }) => {
  return isLoading ? (
    <CircularProgress />
  ) : (
    <Box>
        <Input
            type='text'
            placeholder="Search for your favorite character"
            onChange={handleSetSearch}
        />
        <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(5, 1fr)' }}
            gap={{ base: 5, sm: 5, lg: 10 }}
            mt={5}
        >
        {characters?.map((character) => (
            <CharacterCard
                key={character.uid}
                search={search}
                { ...character }
            />
        ))}
        </Grid>
    </Box>
  );
};

export default Characters;
