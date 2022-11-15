import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestGetCharacters } from "../api";
import Characters from "../components/Characters";
import { actions } from "../redux";
import { RootState } from "../redux/store";

const Home = () => {
  const dispatch = useDispatch();
  const { characters, isLoading } = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    (async () => {
      dispatch(actions.characters.getCharactersLoading());
      try {
        const response = await requestGetCharacters();
        if (response?.data.message !== 'ok') {
            dispatch(actions.characters.getCharactersError());
        } else {
            dispatch(actions.characters.getCharactersSuccess(response.data.results));
        }
      } catch(error) {
        console.error(error);
      }
    })();
  }, [dispatch]);

  return <Characters
    isLoading={isLoading}
    characters={characters}
  />
};

export default Home;
