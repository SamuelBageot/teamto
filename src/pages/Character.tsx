import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  requestGetCharacterDetails,
  requestGetHomeworldDetails,
} from "../api";
import { actions } from "../redux";
import { RootState } from "../redux/store";
import {
  CircularProgress,
  Box,
  Flex,
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Divider,
  CardFooter
} from "@chakra-ui/react";
import { getSingleDataID } from "../utils";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CharactersLayout from "../components/Layouts/CharactersLayout/CharactersLayout";

type Params = {
  id: string;
};

const CharacterPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams<Params>();
  const { details, isLoading } = useSelector(
    (state: RootState) => state.characters
  );
  const { details: homeworldDetails } = useSelector(
    (state: RootState) => state.homeworlds
  );

  useEffect(() => {
    (async () => {
      dispatch(actions.characters.getCharacterDetailsLoading());
      try {
        const response = await requestGetCharacterDetails({ id });
        if (response?.status !== 200) {
          dispatch(actions.characters.getCharacterDetailsError());
        } else {
          dispatch(
            actions.characters.getCharacterDetailsSuccess(response.data)
          );
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    let planetID;
    if (details?.homeworld) {
      planetID = getSingleDataID(details?.homeworld);
    }
    if (planetID) {
      (async () => {
        dispatch(actions.homeworlds.getHomeworldDetailsLoading);
        try {
          const response = await requestGetHomeworldDetails({ id: planetID });
          if (response?.status !== 200) {
            dispatch(actions.homeworlds.getHomeworldDetailsError);
          } else {
            dispatch(
              actions.homeworlds.getHomeworldDetailsSuccess(response.data)
            );
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [dispatch, details?.homeworld]);

  const { name, birth_year, gender, hair_color, height, mass, skin_color } =
    details;

  const { name: homeworldName } = homeworldDetails;

  return (
    <CharactersLayout>
      <motion.div
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: "100vh",
          zIndex: 1000001,
        }}
      >
        {isLoading ? (
          <Flex
            direction={"column"}
            justifyContent="center"
            alignItems={"center"}
            height="100%"
            width={"100%"}
          >
            <CircularProgress isIndeterminate color="#FFE81F" />
          </Flex>
        ) : (
          <Flex
            direction={"column"}
            justifyContent="center"
            alignItems={"center"}
            height="100%"
            width={"100%"}
          >
            <Box>
              <NavLink
                style={{ textDecoration: "none", alignSelf: "flex-start" }}
                to={{ pathname: "/characters", state: { from: "/character" } }}
              >
                <Flex
                  mb={15}
                  fontSize="20px"
                  alignItems={'center'}
                  color={"white"}
                  _hover={{ color: "#FFE81F" }}
                >
                  <AiOutlineArrowLeft />
                  <Text ml={5}>Back to characters</Text>
                </Flex>
              </NavLink>
              <Card
                border="3px solid #FFE81F"
                borderRadius={5}
                bgColor={"white"}
                width="500px"
                maxW="sm"
                padding={"15px 20px"}
              >
                <CardBody>
                  <Stack mt="6" spacing="3">
                    <Heading fontSize={"30px"} mb={30}>
                      {name}
                    </Heading>
                    <Box>
                      <Text fontSize={"22px"} mb={10}>
                        From{" "}
                        <span style={{ fontWeight: 600 }}>{homeworldName}</span>
                      </Text>
                    </Box>
                    <Text>
                      Et eodem impetu Domitianum praecipitem per scalas itidem
                      funibus constrinxerunt, eosque coniunctos per ampla spatia
                      civitatis acri raptavere discursu. iamque artuum et
                      membrorum divulsa conpage superscandentes corpora
                      mortuorum ad ultimam truncata deformitatem velut
                      exsaturati mox abiecerunt in flumen.
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter
                  mt={30}
                  display="flex"
                  justifyContent={"space-around"}
                >
                  <Box>
                    <Text>gender</Text>
                    <Text textTransform={"capitalize"} fontWeight={600}>
                      {gender}
                    </Text>
                  </Box>
                  <Box>
                    <Text>Height</Text>
                    <Text fontWeight={600}>{height}</Text>
                  </Box>
                  <Box>
                    <Text>Mass</Text>
                    <Text fontWeight={600}>{mass}</Text>
                  </Box>
                  <Box>
                    <Text>Mass</Text>
                    <Text fontWeight={600}>{mass}</Text>
                  </Box>
                </CardFooter>
              </Card>
            </Box>
          </Flex>
        )}
      </motion.div>
    </CharactersLayout>
  );
};

export default CharacterPage;
