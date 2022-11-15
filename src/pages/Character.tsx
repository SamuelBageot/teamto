import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { requestGetCharacterDetails, requestGetCharacters } from "../api";
import { actions } from "../redux";
import { RootState } from "../redux/store";
import { CircularProgress, Grid, Box, Input } from "@chakra-ui/react";

type Params = {
  id: string;
};

const CharacterPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams<Params>();
  const { details, isLoading } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    (async () => {
      dispatch(actions.characters.getCharacterDetailsLoading);
      try {
        const response = await requestGetCharacterDetails({ id });
        console.log(response);
        if (response?.status !== 200) {
          dispatch(actions.characters.getCharacterDetailsError);
        } else {
          dispatch(
            actions.characters.getCharacterDetailsSuccess(response.data.result)
          );
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);

  console.log(details);

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Box>
      <h1>{JSON.stringify(details)}</h1>
    </Box>
  );
};

export default CharacterPage;
