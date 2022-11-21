import { Box, Button, Container, Flex, Input } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { requestGetCharacters, requestGetHomeworlds, requestSearchCharacters } from "../../api";
import { actions } from "../../redux";
import { RootState } from "../../redux/store";
import { getRangeNbs } from "../../utils";
import ReactPaginate from "react-paginate";
import style from "./style.module.css";
import Characters from "../../components/Characters";
import CharactersLayout from "../../components/Layouts/CharactersLayout/CharactersLayout";

const AllCharacters = () => {
  const location = useLocation();
  const prevPath = location.state?.from;
  console.log(location)
  const dispatch = useDispatch();

  const handleSetActivePage = (e: any) => {
    const selectedPage = String(e.selected + 1);
    dispatch(actions.characters.setActivePage(selectedPage));
  };

  const handleSetSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    dispatch(actions.characters.setSearchSuccess(searchValue));
    dispatch(actions.characters.setActivePage('1'));
  };

  const {
    characters,
    isLoading,
    search,
    pagesRange,
    nbOfPages,
    activePage,
    resultsLimit,
  } = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    (async () => {
      dispatch(actions.characters.getCharactersLoading());
      try {
        const response = await requestGetCharacters({
          page: activePage,
          search
        });
        console.log(response);
        if (response?.status !== 200) {
          dispatch(actions.characters.getCharactersError());
        } else {
          dispatch(actions.characters.getCharactersSuccess(response.data));
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch, activePage, search]);

  console.log(characters);

  useEffect(() => console.log(isLoading), [isLoading])

  return (
    <CharactersLayout>
      <motion.div
        initial={{ opacity: prevPath !== '/' ? 1 : 0 }}
        animate={{ opacity: 1, transition: { duration: prevPath !== '/' ? 3 : 0, delay: prevPath !== '/' ? 3 : 0 } }}
        // exit={false}
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "transparent",
          position: "absolute",
          top: "100vh",
          zIndex: 1000001,
        }}
      >
        <motion.div
          initial={{ opacity: prevPath !== '/' ? 1 : 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5, delay: prevPath !== '/' ? 4 : 0 } }}
          // exit={false}
        >
          <Container
            className={style.paginate}
            height={"100%"}
            // maxW='1500px'
            centerContent
          >
            <Characters
              isLoading={isLoading}
              characters={characters}
              search={search}
              handleSetSearch={handleSetSearch}
            />
            <Box mt={50} bg={"white"}>
              <ReactPaginate
                className={style.paginate}
                activeClassName={style.active}
                pageCount={nbOfPages}
                nextLabel="Next >"
                previousLabel="Prev <"
                pageRangeDisplayed={5}
                onPageChange={handleSetActivePage}
              />
            </Box>
          </Container>
        </motion.div>
      </motion.div>
    </CharactersLayout>
  );
};

export default AllCharacters;
