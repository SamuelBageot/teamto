import { ChangeEventHandler, FC } from "react";
import {
  CircularProgress,
  Grid,
  Box,
  Input,
  Flex,
  Alert,
  AlertIcon,
  Text,
} from "@chakra-ui/react";
import { Character } from "../../redux/characters/types";
import CharacterCard from "./Character";
import { getSingleDataID } from "../../utils";

export type CharactersTemplateProps = {
  isLoading: Boolean;
  characters: Character[];
  search: string;
  handleSetSearch: ChangeEventHandler<HTMLInputElement>;
};

const Characters: FC<CharactersTemplateProps> = ({
  isLoading,
  characters,
  search,
  handleSetSearch,
}) => {
  return (
    <Box>
      <Input
        type="text"
        width={"100%"}
        height="50px"
        fontSize={"20px"}
        placeholder="Search for your favorite character"
        onChange={handleSetSearch}
      />
      <Flex
        w={"1000px"}
        minH={"600px"}
        direction="column"
        alignItems={"center"}
        justifyContent="center"
      >
        {isLoading ? (
          <Box>
            <CircularProgress isIndeterminate color="#FFE81F" />
          </Box>
        ) : (
          <Box>
            {!characters.length ? (
              <Box color={"white"}>
                <Alert status="warning">
                  <AlertIcon color={'#FFE81F'} w={25} mr={10} />
                  <Text color={'#FFE81F'} fontSize={28}>No result match your search</Text>
                </Alert>
              </Box>
            ) : (
              <Grid templateColumns={"repeat(5, 1fr)"} gap="20px" mt={100}>
                {
                  characters?.map((character) => {
                    const characterID = getSingleDataID(character.url);
                    return (
                      <CharacterCard
                        key={characterID}
                        characterID={characterID}
                        search={search}
                        {...character}
                      />
                    );
                  })
                }
              </Grid>
            )}
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Characters;
