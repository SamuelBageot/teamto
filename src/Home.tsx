import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestGetCharacters } from "./api";
import { actions } from "./redux";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(actions.characters.getCharactersLoading());
      const response = await requestGetCharacters();
      if (response) {
        console.log(response);
        dispatch(actions.characters.getCharactersSuccess(response.data.results));
      }
    })();
  }, [dispatch]);
  return <></>
};

export default Home;
